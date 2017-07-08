// export values
exports.Topic = Topic;
exports.Topics = Topics;

function Topic(title, authorName, authorImage) {
  this.id = undefined;
  this.title = title;
  this.upVotes = 0;
  this.downVotes = 0;
  this.date = new Date();
  this.authorName = authorName;
  this.authorImage = authorImage;
}

Topic.prototype.vote = function(voteValue) {
  if (voteValue ==  this.VoteEnum.UP) {
    this.upVotes++;
  } else {
    this.downVotes++;
  }
}

Topic.prototype.assignId = function(id) {
  this.id = id;
}

Topic.prototype.VoteEnum = {
  'UP': 1,
  'DOWN': -1
}

function Topics() {
  var arr = [];
  arr.push.apply(arr, arguments);
  arr.__proto__ = Topics.prototype;
  return arr;
}

Topics.prototype = new Array;

Topics.prototype.insert = function(topic) {
  topic.assignId(this.length);
  this.push(topic);
  return topic;
};
