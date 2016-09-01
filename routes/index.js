var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

/* homepage setup */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/posts', function(req, res, next) {
  Post.find(function(err, posts){
    if(err){
      return next(err);
    }
    res.json(posts);
  });
});

router.post('/posts', function(req, res, next) {
  var post = new Post(req.body);
  post.save(function(err, post){
    if(err) {
      return next(err);
    }
    res.json(post);
  });
});

// delete post
router.delete('/posts/:post', function(req, res) {
	req.post.comments.forEach(function(id) {
		Comment.remove({
			_id: id
		}, function(err) {
			if (err) { return next(err)}
		});
	})
	Post.remove({
		_id: req.params.post
	}, function(err, post) {
		if (err) { return next(err); }

		// get and return all the posts after you delete one
		Post.find(function(err, posts) {
			if (err) { return next(err); }

			res.json(posts);
		});
	});
});

router.param('post', function(req, res, next, id) {
  var query = Post.findById(id);

  query.exec(function (err, post){
    if (err) { return next(err); }
    if (!post) { return next(new Error("can't find post")); }

    req.post = post;
    return next();
  });
});

router.param('comment', function(req, res, next, id) {
  var query = Comment.findById(id);

  query.exec(function (err, comment){
    if (err) { return next(err); }
    if (!comment) { return next(new Error("can't find comment")); }

    req.comment = comment;
    return next();
  });
});

router.get('/posts/:post', function(req, res, next) {
  req.post.populate('comments', function(err, post) {
    res.json(post);
  });
});

// router.put('/posts/:post/edit', function(req, res){
//   Post.findOne({title: req.params.title}).then(function(post){
//     post.title = req.body.title;
//     post.save(function(err){
//       if(!err){
//         res.redirect("/home");
//       }
//     })
//   });
// });

router.put('/posts/:post/upvote', function(req, res, next) {
  req.post.upvote(function(err, post){
    if (err) { return next(err); }
    res.json(post);
  });
});

router.put('/posts/:post/downvote', function(req, res, next) {
  req.post.downvote(function(err, post){
    if (err) { return next(err); }
    res.json(post);
  });
});

router.post('/posts/:post/comments', function(req, res, next) {
  var comment = new Comment(req.body);
  comment.post = req.post;

  comment.save(function(err, comment){
    if(err){ return next(err); }

    req.post.comments.push(comment);
    req.post.save(function(err, post) {
      if(err){ return next(err); }

      res.json(comment);
    });
  });
});

// // delete comment
// router.delete('/posts/:post/comments', function(req, res, next) {
// 	Comment.remove({
// 		_id: req.params.post.comments.comment
// 	}, function(err, comment) {
// 		if (err) { return next(err); }
//
// 		// get and return all the comments after you delete one
// 		Comment.find(function(err, comments) {
// 			if (err) { return next(err); }
//
// 			res.json(commments);
// 		});
// 	});
// });

router.put('/posts/:post/comments/:comment/upvote', function(req, res, next) {
  req.comment.upvote(function(err, comment){
    if (err) { return next(err); }

    res.json(comment);
  });
});

router.put('/posts/:post/comments/:comment/downvote', function(req, res, next) {
  req.comment.downvote(function(err, comment){
    if (err) { return next(err); }

    res.json(comment);
  });
});

module.exports = router;
