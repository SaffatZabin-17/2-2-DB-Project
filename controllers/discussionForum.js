const discussionForumModels = require('../models/Discussion_Forum');
const userModels = require('../models/user-info');
const courseModels = require('../models/category-course-info')


exports.getForumHome = async(req, res, next) => {
    const user_id = req.params.ID;
    console.log(user_id)

}