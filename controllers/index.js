var express = require('express');
var router = express.Router();
var Cart = require('../models/cart');

/* Create new item */
router.post('/item/:id/new', function(req, res, next) {
  const data =  {
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    user: req.params.id
  }

  Cart.create(data, (error, cart) => {
    if (error) {
        return res.send({
            success: false,
            error: error
        })
    } else {
        return res.send({
            success: true,
            message: cart
        })
    }
})
});

/* Get all items */
router.get('/:id/cart', function(req, res, next) {
  Cart.find({user: req.params.id}, (error, cart) => {
    if (error) {
        return res.send({
            success: false,
            message: error
        })
    } else {
        return res.send({
            success: true,
            message: cart
        })
    }
}).populate('user')
});

/* Get one item */
router.get('/item/:id', function(req, res, next) {
  Cart.findById({_id: req.params.id}, (error, cart) => {
    if (error) {
      return res.send({
          success: false,
          message: error
      })
  } else {
      return res.send({
          success: true,
           message: cart
      })
  }
  }).populate('user')
});

/* Delete an item */
router.delete('/item/:id', function(req, res, next) {
  Cart.findOneAndDelete({_id: req.params.id}, (error, cart) => {
    if (error) {
      return res.send({
        success: false,
        message: error
      })
    } else {
      return res.send({
        success: true,
        message: cart
      })
    }
  })
})

module.exports = router;
