const express = require('express');
const path = require("path");
// var bodyParser = require('body-parser');
// var cookieParser = require('cookie-parser');
// var multer = require('multer');
// var nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 8080



//set view engine
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");

//set static folder
app.use(express.static(__dirname + '/public'));

app.use(express.static('public'));

app.locals = {
    site: {
        title: 'Admin',
        name: "admin",
        description: 'Right way to find Vehicle'
    },
    author: {
        name: 'Seun Oyeniyi',
        contact: 'iamseunoyeniyi@gmail.com'
    },
};


//FRONT END
app.get("/", (req, res) => {
    res.send("Hello World!");
})


app.listen(port, () => {
    console.log("App Listening... at " + port);
})