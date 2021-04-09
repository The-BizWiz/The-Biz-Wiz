const {Router} = require('express')
const router = new Router();

// business related routes

// get all businesses
router.get('/all');

// get all businesses by type
router.get('/:type');

// get all businesses by type & location
router.get('/:type/rad=?:distance');

// delete a business

// business makes a post

// business comments on a post

// business updates a post

// business updates a comment

// business deletes a post

// business deletes a comment it made or a comment on a post it made

module.exports = router;