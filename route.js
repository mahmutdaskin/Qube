/* ============================
  ROUTES FOR THE TOUCH SCREEN
============================ */

var language = require('./lang.js');
const nodemailer = require('nodemailer');

/* START PAGE */
var home = function(req, res, next) {
    res.render('home');
    //res.render('results', {lang: language.controller.getLang, success: null});
    //res.render('menu', {text: language.selectText(language.controller.getLang)});
};

var sendeMail = function(req, res) {
    console.log("Vitu awesome");
    // TODO Secure sender credentials.
    // SOMEBODY TOUCHA MY SPAGHETT
    var formContent = req.body;
    var toAddress = formContent["address"];
    delete formContent["address"];

    // Default to english
    var subject = language.controller.getLang === 'fi' ? 'Qube Mittaustuloksesi' : 'Your Qube measurement results';

    var emailContent = Object.values(formContent).join("\n");
    
    var transport = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 587,
        secure: false, // False for TLS.
        requireTLS: true,
        auth: {
            user: "email",
            pass: "password"
        },
        tls: {
            ciphers: "SSLv3"
        }
    });

    let mailOptions = {
        from: '"nimi" <email>', // sender address
        to: toAddress, // list of receivers
        subject: subject, // Subject line
        text: emailContent
    };

    console.log(mailOptions)

    transport.sendMail(mailOptions, (error, info) => {
        let success = true;
        if (error) {
            success = false;
            res.render('results', {lang: language.controller.getLang, success: success});
            return console.log(error);
        }
        console.log("Message sent: %s", info.messageId);
        res.render('results', {lang: language.controller.getLang, success: success});
    });
}

var selectLanguage = function(req, res) {
    language.controller.setLang = req.body.language;
    res.render('menu', {text: language.menuText(language.controller.getLang)});
};

/* USER INPUTS PARAMETERS */
var basicInfo = function(req, res, next) {
   res.render('basicInfo', {text: language.basicInfoText(language.controller.getLang)});
};

/* USER SELECTS DEVICES */
var menu = function(req, res, next) {
  res.render('menu', {text: language.menuText(language.controller.getLang)});
};

var measurementsInProcess = function(req,res, next) {
     res.render('inprocess', {text: language.inprocessText(language.controller.getLang)});
};

var bloodPressure = function(req, res) {
    res.render("bloodPressure", {text: language.bloodPressureText(language.controller.getLang)});
}

var bloodPressureResults = function(req, res) {
    res.render("bloodPressureResults", {text: language.bloodPressureResultsText(language.controller.getLang)});
}

var results = function(req, res, next) {
    res.render('results', {lang: language.controller.getLang, success: null});
};

var warning = function(req, res) {
    res.render("warning", {text: language.warningText(language.controller.getLang)});
}

/* =============================
  ROUTES FOR THE SECOND SCREEN
=============================== */

var inProcessPoster = function(req, res, next) {
    res.render('inProcessPoster', {text: language.inprocessPosterText(language.controller.getLang)});
};

// Mittauskuutio welcome screen
var poster = function(req, res, next) {
    res.render('poster', {text: language.posterText(language.controller.getLang)});
};

var finished = function(req, res, next) {
    res.render('finished', {text: language.finishedText(language.controller.getLang)});
};

 /* FINISHED PAGE BIG SCREEN */
var finishedPoster = function(req, res, next) {
    res.render('finishedPoster', {text: language.finishedPosterText(language.controller.getLang)});
 };

 // 404 not found
var notFound404 = function(req, res, next) {
    res.status(404);
    res.render('404', {title: '404 Ei Löydy'});
};


/* ==============================
    EXPORTS
============================== */

// home
module.exports.home = home;

// BasicInfo
module.exports.basicInfo = basicInfo;

// select Devices
module.exports.menu = menu;

// measurements are in process
module.exports.measurementsInProcess = measurementsInProcess;

// results on the big screen:
module.exports.results = results;

module.exports.inProcessPoster = inProcessPoster;

module.exports.poster = poster;

module.exports.finished = finished;

module.exports.finishedPoster = finishedPoster;

module.exports.selectLanguage = selectLanguage;

module.exports.sendeMail = sendeMail;

module.exports.bloodPressure = bloodPressure;

module.exports.bloodPressureResults = bloodPressureResults;

module.exports.warning = warning;

// 404 not found
module.exports.notFound404 = notFound404;
