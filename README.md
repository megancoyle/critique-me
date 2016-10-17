# Critique-Me

## Overview
critique me is a MEAN stack web application where users can post projects and have others critique their work. Users can upvote/downvote projects as well as upvote/downvote critiques.

[![Screenshot](screenshot.png)](https://critique-me.herokuapp.com/)

[View the Deployed App](https://critique-me.herokuapp.com/)

## Technologies Used
* [Mongo DB](https://www.mongodb.com/)
* [Express.js](https://expressjs.com/)
* [Angular.js](https://angularjs.org/)
* [Node.js](https://nodejs.org)
* [Bower](https://bower.io/)

## Background
In my free time, I work as a [professional fine artist](http://www.mcoyle.com). I remember how as an art major back in college, class critiques could sometimes be harsh and not at all constructive. So I thought, why not build an app where users post their work and other users can critique the work, although the critiques are filtered by RegEx so that negative or curt remarks can't get posted.

I was unable to add in the Regex aspect of the app at the moment, but I hope to tackle it soon. Stay tuned...

## User Stories
* As a user, I can add projects to the project index.
* As a user, I can upvote/downvote posted projects.
* As a user, I can comment on projects.
* As a user, I can upvote/downvote comments.

## Installation
```
npm install
bower install
```

## Unsolved Problems/Next Steps
* Currently, users can upvote and downvote as many times as they want for comments and art posts. I want to configure the voting so users are limited to one vote.
* RegEx for preventing users from commenting when using specific words/phrases
* Allow comments to be deleted properly
* Additional styling (thus far I have only done some preliminary styling)
