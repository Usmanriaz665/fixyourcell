var express = require('express');
var router = express.Router();
var Person = require('../database/model.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});

router.get('/home.html', function(req, res, next) {
  res.render('home');
});

router.get('/aboutUs.html', function(req, res, next) {
  res.render('aboutUs');
});
router.post('/aboutUs', function(req, res){
  var personInfo = req.body; //Get the parsed information
  
  if(!personInfo.name || !personInfo.phone || !personInfo.email || !personInfo.message){
    res.send({
      message: "Sorry, you provided worng info", type: "error", showMsg: true});
  } else {
     var newPerson = new Person({
        name: personInfo.name[0] +' '+ personInfo.name[1],
        contact: personInfo.phone,
        email: personInfo.email,
        message: personInfo.message
     });
   
    newPerson.save(function (err, Person) {
      if (err)
        res.send({ message: "Credentials error Please Call Us or Use Chat ", type: "error", showMsg: true });
      else
        res.send({
          message: "Thanks We Will Soon Contact You", type: "success", person: personInfo, showMsg: true
        });
    });
  }
});

router.get('/services.html', function(req, res, next) {
  res.render('services');
});
router.get('/blog.html', function(req, res, next) {
  res.render('blog');
});
router.get('/contactUs.html', function(req, res, next) {
  res.render('contactUs');
});
router.post('/contactUs', function(req, res){
  var personInfo = req.body; //Get the parsed information
  
  if(!personInfo.name || !personInfo.contact || !personInfo.email || !personInfo.message){
     res.send({
        message: "Sorry, you provided worng info", type: "error", showMsg: true});
  } else {
     var newPerson = new Person({
        name: personInfo.name,
        contact: personInfo.contact,
        email: personInfo.email,
        message: personInfo.message
     });
   
     newPerson.save(function(err, Person){
        if(err)
           res.send({message: "Credentials error Please Call Us or Use Chat ", type: "error", showMsg: true});
        else
           res.send({
              message: "Thanks We Will Soon Contact You", type: "success", person: personInfo, showMsg: true});
     });
  }
});
router.get('/index-5.html', function(req, res, next) {
  res.render('index-5');
});
router.get('/macRepair.html', function(req, res, next) {
  res.render('macRepair');
});
router.get('/laptopRepair.html', function(req, res, next) {
  res.render('laptopRepair');
});
router.get('/tabletRepair.html', function(req, res, next) {
  res.render('tabletRepair');
});
router.get('/mobileRepair.html', function(req, res, next) {
  res.render('mobileRepair');
});
router.get('/gameConsoleRepair.html', function(req, res, next) {
  res.render('gameConsoleRepair');
});
router.get('/onSiteRepair.html', function(req, res, next) {
  res.render('onSiteRepair');
});
router.get('/index-12.html', function(req, res, next) {
  res.render('index-12');
});
router.get('/index-13.html', function(req, res, next) {
  res.render('index-13');
});
router.get('/sitemap.xml', function(req, res, next) {
  res.render('sitemap');
});
module.exports = router;
