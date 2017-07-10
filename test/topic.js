process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app').app;
var expect = require('chai').expect;
var topicModel = require('../models/topic');

describe('Topic model test', function() {
  it("expects a new topic", function() {
    var topicTitle = "Hello World!";
    var authorName = "Suraj";
    var authorImage = "test.png";
    var myTopic = new topicModel.Topic(topicTitle, authorName, authorImage);

    expect(myTopic).to.be.a('object');
    expect(myTopic.date).to.be.a('date');
    expect(myTopic.title).to.equal(topicTitle);
    expect(myTopic.upVotes).to.equal(0);
    expect(myTopic.downVotes).to.equal(0);
  });

  it("expects an array of topics", function() {
    var myTopics = new topicModel.Topics();

    expect(myTopics).to.be.a('array');
    expect(myTopics.length).to.equal(0);

    myTopics.insert(new topicModel.Topic("Hello World!", "Suraj", "test.png"));
    expect(myTopics.length).to.equal(1);
    expect(myTopics[0].id).to.equal(0);
    expect(myTopics[0].title).to.equal("Hello World!");
    expect(myTopics[0].authorName).to.equal("Suraj");
  });

  it("creates a new topic in memory", function(done) {
    chai.request(server)
      .post('/topic')
      .send({
        title: 'Hello World!',
        authorName: 'Suraj',
        authorImage: 'test.png'
      })
      .end(function(err, res) {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.a('object');
        expect(res.body.status).to.equal(true);
        expect(res.body.message).to.be.a('string');
        expect(res.body.data).to.be.a('object');
        expect(res.body.data.title).to.equal('Hello World!');
        expect(res.body.data.authorName).to.equal('Suraj');
        expect(res.body.data.authorImage).to.equal('test.png');
        expect(res.body.data.id).to.equal(0);
        done();
      });
  });
});
