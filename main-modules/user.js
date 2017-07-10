// Load dependencies
var fs = require('fs');
var path = require('path');
var avatar = require('./avatar');
var errorHandler = require('./error_handler');

// Exported values
exports.getAvatar = getAvatar;

// Definations
var friends = undefined;

function getAvatar(req, res) {
  res.send({
    message: 'Avatar fetched',
    data: avatar.getNewAvatar(),
    status: true
  });
}
