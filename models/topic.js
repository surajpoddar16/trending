// Topic.js
// exports Topic constructor used to create a new Topic
// exports Topics constructor used to create a list of Topics


// export values
exports.Topic = Topic;
exports.Topics = Topics;

// Topic constructor creates a new topic
function Topic(title, authorName, authorImage) {
  this.id = undefined;
  this.title = title;
  this.upVotes = 0;
  this.downVotes = 0;
  this.date = new Date();
  this.authorName = authorName;
  this.authorImage = authorImage;
}

// Public method to vote on Topic
// voteValue expects values from VoteEnum
Topic.prototype.vote = function(voteValue) {
  if (voteValue ==  this.VoteEnum.UP) {
    this.upVotes++;
  } else {
    this.downVotes++;
  }
}

// Method to assign id to topic when saved in a list of topics using Topics
// constructor
Topic.prototype.assignId = function(id) {
  this.id = id;
}

// Topic vote enum. -1 for downvote and +1 for upvote
Topic.prototype.VoteEnum = {
  'UP': 1,
  'DOWN': -1
}

// Topics array constructor extends array.
function Topics() {
  var arr = [];
  arr.push.apply(arr, arguments);
  arr.__proto__ = Topics.prototype;
  return arr;
}

Topics.prototype = new Array;

// This method assignsId to the topic to be inserted and then pushes the topic
// in topics array
Topics.prototype.insert = function(topic) {
  topic.assignId(this.length);
  this.push(topic);
  return topic;
};
