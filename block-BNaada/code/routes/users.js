var express = require(`express`);

var router = express.Router();
var User = require(`../models/users`);

router.get(`/`, (req, res) => {
  User.find({}, (err, Users) => {
    console.log(err, Users);
    if (err) return next(err);
    res.render(`users`, { Users: Users });
  });
});

router.get(`/new`, (req, res) => {
  res.render(`addForm`);
});

router.post(`/`, (req, res) => {
  User.create(req.body, (err, userCreated) => {
    if (err) return next(err);
    res.redirect(`/users`);
  });
});

router.get(`/:id`, (req, res) => {
  var id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) return next(err);
    res.render(`singleUser`, { user: user });
  });
});

module.exports = router;
