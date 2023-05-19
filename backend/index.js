const cors = require("cors");
const express = require("express");
const bodyparser = require("body-parser");
const { success, error } = require("consola");
const { connect } = require("mongoose");

const { DB, PORT } = require("./config");

const app = express();
// Serve static files from the "Media" folder
const serveStatic = require("serve-static");
app.use("/media", serveStatic("Media"));
app.use(express.static('Media'))



app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

//Admin
const AdminRouter = require("./routes/AdminRoutes");
app.use("/admin", AdminRouter);

//Travel Blog
const ArticleRouter = require("./routes/ArticleRoutes");
app.use("/articles", ArticleRouter);

//Accommodations

//Travel Agencies
const agencyRouter = require("./Routes/Agency");
app.use("/Agency", agencyRouter);

//Tour Guide
const Guideroute = require("./Routes/guideRoutes");
app.use("/guide", Guideroute);

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
