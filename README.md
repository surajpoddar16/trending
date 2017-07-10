# Trending
Vote for your favourite topics, get list of most trending topics.

### Requirements

 - Maintain a list of topics and its upvotes/downvotes
 - Allow the user to submit topics. For this challenge, a “topic” is simply a string that does not exceed 255 characters.
 - Allow the user to upvote or downvote a topic. For this challenge, the user may upvote or downvote the same topic multiple times.
 - Always return a list of top 20 topics (sorted by upvotes, descending) on the homepage
 - In-memory: Design an in-memory data structure (shared by the same process as your application) that will allow you to keep the topics in memory without using data persistence. It is okay for the topics to disappear after the application restarts. You may use data structures provided by your language’s standard library to build your data structure. Please note that in-memory data structure stores such as Redis and relational databases are not allowed.

### Implementation
 - Using expressJs as application framework.
 - Provides avatar generation feature to be used as user identity.
 - When CommonJs modules are required all the local values maintain their value. Using this feature to implement in memory management of topics by using user.js as context provider for topics and requiring this module only once.

### Deployment
This project uses **ExpressJs** as NodeJs web application framework. Server initialisation code can be found on `/app.js`.

This application was tested successfully on **NodeJs v6.0.0**

To deploy the server in development mode enter following commands

```
npm install
npm run start
```
Note that `npm run start` starts a node server in development environment. Alternatively you can run this on one of the following envs.

```
production
development
test
```

You can also install pm2 to keep running the server in background. Just use `npm install -g pm2`. Once pm2 is installed you can do something like,

```
NODE_ENV=development pm2 start app.js -n trending-backend
```

### Important Files/ Folders

**app.js**
This is the entry file to the application. It contains the logics for setting the view engine, parsing the request, logging module, route handling, serving static files and initialsing the server.

**routes/client.js**
This file acts as a middleware for routing client requests with appropriate methods.

**models/topic.js**
This file provides constructor methods for creating topics and creating list of topics.

**main-modules/topic.js**
Provides request handlers for creating new topics, getting sorted topics list and voting on topics.

**main-modules/avatar.js**
Provides method to create a new Avatar for the client. This module uses **moniker** to generate a random name for the avatar.

**main-modules/user.js**
Provides request handlers for user apis.

**public/**
The contents of this folder are served as static resources by the node server.

### Testing

This project uses `mocha` combined with `chai` for testing the application. All test files should be added in `test/` folder.

