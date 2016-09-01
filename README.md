# Critique-Me

## Overview
critique me is a MEAN stack web application where users can post projects and have others critique their work.

![Screenshot](screenshot.png)

## Technologies Used
* [Mongo DB](https://www.mongodb.com/)
* [Express.js](https://expressjs.com/)
* [Angular.js](https://angularjs.org/)
* [Node.js](https://nodejs.org)
* [Bower](https://bower.io/)

## Background
In my free time, I work as a [professional fine artist](http://www.mcoyle.com). I remember how as an art major back in college, class critiques could sometimes be harsh and not at all constructive. So I thought, why not build an app where users post their work and other users can critique the work, although the critiques are filtered by RegEx so that negative or curt remarks can't get posted.

I was unable to add in the Regex aspect of the app at the moment, but I hope to tackle it soon. Stay tuned...

## Installation
```
npm install
bower install
```

## Unsolved Problems/Next Steps
* I was unable to get full CRUD functioning for the art posts, so up next, I hope to tackled the Update functionality.
* Currently, users can upvote and downvote as many times as they want for comments and art posts. I want to configure the voting so users are limited to one vote.
* Successfully deploy this on Heroku
* RegEx for preventing users from commenting when using specific words/phrases
* Additional styling (thus far I have only done some preliminary styling)
