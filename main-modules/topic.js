// topic.js
// exports newTopic, which creates a new Topic in memory and returns the same
// exports getTopicsSorted, returns list of topics in memory sorted by upvotes
// exports voteOnTopic, upvote or downvote a topic based on passed param

// load dependencies
var topicModel = require('../models/topic');

// exported values
exports.newTopic = newTopic;
exports.getTopicsSorted = getTopicsSorted;
exports.voteOnTopic = voteOnTopic;

// definations

// This value will act as in memory data store for topics
// Lost on server restart
var topics = new topicModel.Topics();

// Creates a new topic and adds it to topics list.
function newTopic(req, res) {
  var topic = topics.insert(
    new topicModel.Topic(
      req.body.title,
      req.body.authorName,
      req.body.authorImage
    )
  );

  res.send({
    message: 'Topic inserted',
    status: true,
    data: topic
  });
}

// Returns a list of topics sorted by their upvotes in descending order
// expects pageNumber and limit as request query
function getTopicsSorted(req, res) {
  req.query.pageNumber = req.query.pageNumber || 0;
  req.query.limit = req.query.limit || 20;

  var start = req.query.pageNumber * req.query.limit;
  var end = start + req.query.limit;

  res.send({
    message: 'Topics fetched',
    status: true,
    data: topics.sort(function(a, b) {
      return b.upVotes - a.upVotes;
    }).slice(start, end)
  });
}

function voteOnTopic(req, res) {
  topics[req.body.id].vote(req.body.vote);

  res.send({
    message: 'Vote counted',
    status: true,
    data: topics[req.body.id]
  });
}
