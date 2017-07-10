// avatar.js
// exports getNewAvatar which returns a new avatar.
// this module uses moniker to get random avatar name
// and randomly selects an image from stored images for avatar image

// Load dependencies
var moniker = require('moniker');
var path = require('path');

// Exported values
exports.getNewAvatar = getNewAvatar;

// Definations

// getNewAvatar returns a new Avatar.
function getNewAvatar() {
  return new Avatar().get();
}

// Avatar, constructor for creating avatar.
// Uses moniker to get random avatar name
// Avatar image is fetched random from existing images in /public/images path.
function Avatar() {
  this.name = moniker.choose();
  this.profileImage = `/public/images/avatar_${this.getRandomIndex()}.png`;
}

// Getter method for Avatar
Avatar.prototype.get = function() {
  return {
    name: this.name,
    profileImage: this.profileImage
  };
}

// Random index generator between 1 and 4 for image selection.
Avatar.prototype.getRandomIndex = function() {
  return Math.floor(4 * Math.random()) + 1;
}
