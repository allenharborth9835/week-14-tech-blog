const { Comment } = require('../models');

const commentdata = [{
    comment_text: "This is how your comments will look. Start a conversation now!",
    post_id: 1,
    user_id: 1
}]

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;