const { User } = require('../models');

const userdata = [{
    username: "siteAdmin",
    email: "siteAdmin@TechBlog.net",
    password: "password"
}]

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
