const cors = require("cors");
const express = require('express');
const bodyparser = require('body-parser')
const { success, error } = require("consola");
const { connect } = require('mongoose')

const { DB, PORT } = require('./config')

const app = express()

app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))


//routes
//Travel Blog

//Accommodations

//Travel Agencies
const agencyRouter = require("./Routes/Agency");
app.use("/Agency", agencyRouter);


//Tour Guide


const startApp = async () => {
    try {
        await connect(DB);
        success({
            message: `Successfully connected with the Database`,
            badge: true
        })

        app.listen(PORT, () => success({ message: `Server started on PORT ${PORT}`, badge: true }))
    } catch (err) {

        error({
            message: `Unable to connect with the Database ${DB}`,
            badge: true
        })
        startApp();
    }


}

startApp();