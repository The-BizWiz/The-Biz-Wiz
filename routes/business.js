const {Router} = require('express')
const router = new Router();

// business related routes

// register a new business

// business login

// business own profile
router.get('/');

// get all businesses
router.get('/all');

// get all businesses by type
router.get('/:type');

// get all businesses by location

// get all businesses by type & location
router.get('/:type/rad=?:distance');

// delete a business

// business makes a post

// business comments on a post

// get one post belonging to a business (& comments on that post)

// get all posts belonging to a business

// business updates a post

// business updates a comment

// business deletes a post

// business deletes a comment it made or a comment on a post it made

// search engine for business name, description

module.exports = router;