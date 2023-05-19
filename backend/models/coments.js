// comments.js

let comments = []; // Array to store the comments

// Add a new comment
const addComment = (comment) => {
  comments.push(comment);
};

// Get all comments
const getComments = () => {
  return comments;
};

module.exports = {
  addComment,
  getComments,
};
