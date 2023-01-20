var url = require('url');
const express = require('express');
const passport = require('passport');
const router = express.Router();

const config = require('../config');

router.get('/', function (req, res, next) {
  res.render('index');
});

router.get('/login', passport.authenticate('saml', { failureRedirect: '/', failureFlash: true }), function (req, res) {
  res.redirect('/');
});

router.post('/callback', passport.authenticate('saml', { failureRedirect: '/', failureFlash: true }), function (req, res) {
  res.redirect('/user');
});

router.get('/logout-api', function (req, res) {
  req.logout();
  const returnToUrl = url.format({
    protocol: req.protocol,
    host: req.get('host'),
    pathname: req.baseUrl
  });
  res.redirect(`https://${config.auth0Domain}/v2/logout?returnTo=${returnToUrl}`);
});

const { profile } = require('console');
const SamlStrategy = require('passport-saml').Strategy;

const strategy = new SamlStrategy(config, function (profile, done) {
  return done(null, {
    userId: profile['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'],
    email: profile['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/upn'],
    // email: profile['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'],
    emailVerified: profile['http://schemas.auth0.com/email_verified'],
    name: profile['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'],
    nickname: profile['http://schemas.auth0.com/nickname'],
    picture: profile['http://schemas.auth0.com/picture'],
  });
});

router.get('/logout-saml', function(req, res) {
  //Here add the nameID and nameIDFormat to the user if you stored it someplace.
  req.user.nameID = req.user.userId;
  req.user.nameIDFormat = 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier';

  strategy.logout(req, function(err, request){
    if(!err){
          res.redirect(request);
      }
    });
  }
);

router.post('/logout-callback', function(req, res){
  req.logout();
  res.redirect('/');
});

router.get('/failure', function (req, res) {
  var error = req.flash('error');
  var errorDescription = req.flash('error_description');
  req.logout();
  res.render('failure', {
    error: error[0],
    error_description: errorDescription[0]
  });
});

module.exports = router;
