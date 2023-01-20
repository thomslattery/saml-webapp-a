const express = require('express');
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;
const router = express.Router();

router.get('/', ensureLoggedIn('/'), function (req, res, next) {
  console.log(req.user);
  res.render('user', { user: req.user });
});

module.exports = router;
