// routes.js

const express = require('express');
const router = express.Router();
const commentsModule = require('../models/coments');

// Add a comment
router.post('/comments', (req, res) => {
  const { comment } = req.body;
  commentsModule.addComment(comment);
  res.status(201).json({ message: 'Comment added successfully.' });
});

// Get all comments
router.get('/comments', (req, res) => {
  const comments = commentsModule.getComments();
  res.json(comments);
});

module.exports = router;
