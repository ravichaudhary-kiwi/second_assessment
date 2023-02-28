const express = require('express');
const router = express.Router();
const cors = require('cors');
const { userCreate, userView, allUser, userUpdate, userDelete } = require('../controller/userController');
const { userCreateValidation, userEmailValidation } = require('../validation/joiValidation');

router.post('/createuser',userCreateValidation,userCreate);
router.get('/viewuser',userEmailValidation, userView);
router.get('/allusers',allUser);
router.patch('/updateuser',userUpdate);
router.delete('/deleteuser',userDelete);

const { postBlog, getPost, allBlogs, editBlog, deleteBlog } = require('../controller/blogController');
router.post('/post',postBlog);
router.get('/post/:_id',getPost);
router.get('/allblogs',cors(),allBlogs);
router.patch('/post',editBlog);
router.delete('/post',deleteBlog);

module.exports = router;