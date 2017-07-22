var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.read(function(err, data) {
        if (err) {
          console.log(err, 'Error');
        }
        res.send(data);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('hello guys', req.body);
      models.messages.create(function(err, data) {
        if (err) {
          console.log(err, 'Error');
        }
        res.status(302);
        res.send(data);
      }, req.body);
    } // a function which handles posting a message to the database
  },

  users: {
    get: function (req, res) {
      
      models.messages.read(function(err, data) {
        if (err) {
          console.log(err, 'Error');
        }
        res.send(data);
      });
    },
    post: function (req, res) {
      models.messages.create(function(err, data) {
        if (err) {
          console.log(err, 'Error');
        }
        res.status(302);
        res.send(data);
      }, req.body);
      
    }
  }
};

