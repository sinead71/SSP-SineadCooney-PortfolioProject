var express = require('express');
var router = express.Router();
var fs = require('fs');

var allUploads = [];
var uploadsNumber = 1;

var files = new Array();

/* GET home page. */
router.get('/)', function(req, res, next){
    res.render('logIn');
})

router.get('/uploadFile', function (req, res, next){
    res.render('fileUpload');
});

router.post('/uploadFile', function ( req, res, next){
    console.log("In POST /uploadFile");
    console.log(req.files[0].filename);
    
    req.files[0]._id = Date.now();
    console.log(req.files[0]);
    
    files.push(req.files[0]);
    res.redirect('/files');
});

//home page
router.get('/home', function(req, res, next){
    console.log('home test');
    res.render('index');
});

router.post('/home', function(req, res, next){
    console.log('home test');
    res.render('index');
});

//images page
router.get('/images', function(req, res, next){
    console.log('images test');
    res.render('images');
});

router.post('/images', function(req, res, next){
    console.log('images test');
    res.render('images');
});

//videos page
router.get('/videos', function(req, res, next){
    console.log('videos test');
    res.render('videos');
});

router.post('/videos', function(req, res, next){
    console.log('videos test');
    res.render('videos');
});

//.swf page
router.get('/swf', function(req, res, next){
    console.log('swf test');
    res.render('swf');
});

router.post('/swf', function(req, res, next){
    console.log('swf test');
    res.render('swf');
});

//upload page 
router.get('/upload', function(req, res, next){
    console.log('upload test');
    res.render('upload');
});

router.post('/upload', function(req, res, next){
    
    var uploads = {};    
    uploads.id = uploadsNumber++;  
    uploads.date = new Date();    
    uploads.uploads = req.body.newUpload;
    allUploads.push(uploads); 
    console.log(allUploads);
    res.render('images', {allUploas: allUploads});
});

router.get('/uploadFile', function (req, res, next){
    res.render('fileUpload');
});

router.post('/uploadFile', function ( req, res, next){
    console.log("In POST /uploadFile");
    console.log(req.files[0].filename);
    
    req.files[0]._id = Date.now();
    console.log(req.files[0]);
    
    files.push(req.files[0]);
    res.redirect('/files');
});


//Log In
router.get('/logIn', function(req, res, next){
    console.log('log in test');
    res.render('logIn');
});

router.post('/logIn', function(req, res, next){
    var yourName = req.body.yourName;
    yourName = yourName.trim();
    
    if(req.body.yourName == "Sinead" && req.body.yourPassword == "2016"){
        res.render('index');
    }
    else{
        req.session.yourName = yourName;
        console.log("LOGIN FAILED")
        res.render('logIn');
    }
    
});

//Sign Up
router.get('/signUp', function(req, res, next){
    console.log('sign up test');
    res.render('signUp');
});

router.post('/signUp', function(req, res, next){
    console.log('sign up test');
    res.render('signUp');
});

//log out button
router.get('/logout', function(req, res, next){
    req.session.destroy();
    res.render('logIn');
});
module.exports = router;
