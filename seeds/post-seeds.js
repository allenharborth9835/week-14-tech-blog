const { Post } = require('../models');

const postdata = [{
    title: "Create your own post now!",
    post_text: "This is how your post will look. Create a post about the upcoming technology and how software is changing the community. start a conversation with comments",
    user_id: 1
}]

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;