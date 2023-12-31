const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8000;
const router = require('./routes/index');
const expressLayouts = require('express-ejs-layouts');
const viewPath = path.join(__dirname, './views');
const assetsPath = path.join(__dirname, './assets');
const session = require('express-session');
const flash = require('connect-flash');
const customMware = require('./config/flashWare');
const mongoose = require('mongoose');

require('dotenv').config();
// Mongoose configuration
const MONGOOSE_URI=process.env.MONGOOSE_URI
mongoose.connect(MONGOOSE_URI,{ useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to Database"));

db.once('open', ()=>{
    console.log("Successfully connected to Mongo Database");
});

// Static and express-ejs-layouts config.
app.set('view engine', 'ejs');
app.set('views', viewPath);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.use(express.urlencoded({extended: false}))
app.use(express.static(assetsPath));
app.use(expressLayouts);

// session, flash for notification's
app.use(session({
    secret:'password',
    saveUninitialized: true,
    resave: true
}));

app.use(flash());
app.use(customMware.setFlash);

// entrance of all routes 'index.js'
app.use('/', router);

// Initiating of our server
app.listen(port, ()=>{
    console.log(`Server running on port: ${port}`);
})