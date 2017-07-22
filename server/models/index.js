var db = require('../db');

module.exports = {
  messages: {
    read: function (cb) {
      var queryArgs = [];
      var queryString = 'SELECT * FROM messages';
      db.dbConnection.query(queryString, queryArgs, cb);
    },
  // a function which produces all the messages
    create: function (cb, messageBody) {     
      // {
      //     username: 'Valjean',
      //     message: 'In mercy\'s name, three days is all I need.',
      //     roomname: 'Hello'
      //   }
      var queryArgs = [];
      var queryString = `INSERT INTO messages (room, message, author) VALUES ("${messageBody.roomname}", "${messageBody.message}", (SELECT id FROM users WHERE username = "${messageBody.username}"));`;
      
      dbConnection.query(queryString, queryArgs, cb);
    }
    // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    read: function (cb) {
      var queryArgs = [];
      var queryString = 'SELECT * FROM users';
      db.dbConnection.query(queryString, queryArgs, cb);
    },
    
    create: function (cb, messageBody) {
      var usersQuery = `INSERT INTO users (username) VALUES ('${messageBody.username}');`;
      dbConnection.query(usersQuery, [], cb);
    }
  }
};