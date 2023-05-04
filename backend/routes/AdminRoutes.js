const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { Admin } = require("../models/Admin");
const { AdminToken } = require("../models/AdminToken");
const { AdminAuth } = require("../middlewares/AdminAuth");
const jwt = require("jsonwebtoken");

//Localhost:5000/admin/register  ---> registration
router.post("/register", (req, res) => {
  Admin.findOne({ email: req.body.email })
    .exec()
    .then((admin) => {
      if (admin) {
        return res.status(401).json({
          status: false,
          message: "Email exists",
          data: undefined,
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              status: false,
              message: "Error, cannot encrypt password",
              data: undefined,
            });
          } else {
            const admin = new Admin({ ...req.body, password: hash });
            admin.save((err, doc) => {
              if (err)
                return res.json({
                  status: false,
                  message: err,
                  data: undefined,
                });

              return res.status(200).json({
                status: true,
                message: "Register Successfully",
                data: doc,
              });
            });
          }
        });
      }
    });
});

//Localhost:5000/admin/login -----> admin login
router.post("/login", (req, res) => {
  Admin.findOne({ email: req.body.email })
    .exec()
    .then((admin) => {
      if (!admin) {
        return res.status(401).json({
          message: "User not found",
          status: false,
          data: undefined,
        });
      }

      bcrypt.compare(
        req.body.password,
        admin.password,
        async (err, result) => {
          if (err) {
            return res.status(401).json({
              status: false,
              message: "Server Error, authentication failed",
              data: undefined,
            });
          }

          if (result) {
            const token = jwt.sign(
              {
                email: admin.email,
                adminId: admin._id,
              },
              process.env.JWT_KEY,
              {
                expiresIn: "2h",
              },
            );

            await AdminToken.findOneAndUpdate(
              { _adminId: admin._id, tokenType: "login" },
              { token: token },
              { new: true, upsert: true },
            );
            return res.status(200).json({
              status: true,
              message: "Login Successfully...",

              data: {
                token,
                admin,
              },
            });
          }
          return res.status(401).json({
            status: true,
            message: "Wrong Password ! ",
            data: undefined,
          });
        },
      );
    })
    .catch((err) => {
      res.status(500).json({
        status: false,
        message: "Server Error, authentication failed....",
        data: undefined,
      });
    });
});

///Localhost:5000/admin/logout ----> admin logout
router.get("/logout", AdminAuth, (req, res) => {
    AdminToken.findOneAndDelete(
      { _adminId: req.adminId, tokenType: "login" },
      (err, doc) => {
        if (err) {
          return res.status(401).json({
            status: false,
            message: "Server error, logout failed",
          });
        }
  
        if (!doc) {
          return res.status(401).json({
            status: false,
            message: "Invalid token, logout failed",
          });
        }
  
        return res.status(200).json({
          status: true,
          message: "Logout successfully",
        });
      },
    );
  });
  
  module.exports = router;
  