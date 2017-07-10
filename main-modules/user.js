// User.js
// exports getAvatar method which returns a new Avatar for the client

// Load dependencies
var fs = require('fs');
var path = require('path');
var avatar = require('./avatar');
var errorHandler = require('./error_handler');

// Exported values
exports.getAvatar = getAvatar;

// Definations

// getAvatar api endpoint when called returns a new avatar for the client.
function getAvatar(req, res) {
  res.send({
    message: 'Avatar fetched',
    data: avatar.getNewAvatar(),
    status: true
  });
}
