var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* Create User */
router.post('/new', function(req, res, next) {
  const data =  {
    username: req.body.username,
    password: req.body.password
  }

  User.create(data, (error, user) => {
    if (error) {
        return res.send({
            success: false,
            error: error
        })
    } else {
        return res.send({
            success: true,
            message: user
        })
    }
})
});

module.exports = router;
