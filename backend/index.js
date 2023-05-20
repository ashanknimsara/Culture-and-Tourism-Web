const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { success, error } = require("consola");
const { connect } = require("mongoose");

const { DB, PORT } = require("./config");

const app = express();

// Enable CORS for all routes and allow credentials
app.use(cors({ origin: true, credentials: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files from the "Media" folder
const serveStatic = require("serve-static");
app.use("/media", serveStatic("Media"));
app.use(express.static("Media"));

//Admin
const AdminRouter = require("./Routes/AdminRoutes");
app.use("/admin", AdminRouter);

//Travel Blog
const ArticleRouter = require("./routes/ArticleRoutes");
app.use("/articles", ArticleRouter);

//Accommodations
//Accommodations
const AccommodationRoutes = require("./Routes/AccommodationRoutes");
app.use("/Accommodation", AccommodationRoutes);

//AccommodationPackage
const AccommodationPackageRoutes = require("./Routes/AccommodationPackage");
app.use("/AccommodationPackage", AccommodationPackageRoutes);


//Travel Agencies
const agencyRouter = require("./Routes/Agency");
app.use("/Agency", agencyRouter);

//Tour Guide
const Guideroute = require("./Routes/guideRoutes");
app.use("/api/guide", Guideroute);

const startApp = async () => {
  try {
    await connect(DB);
    success({
      message: `Successfully connected with the Database`,
      badge: true,
    });

    app.listen(PORT, () =>
      success({ message: `Server started on PORT ${PORT}`, badge: true })
    );
  } catch (err) {
    error({
      message: `Unable to connect with the Database ${DB}`,
      badge: true,
    });
    startApp();
  }
};

startApp();
