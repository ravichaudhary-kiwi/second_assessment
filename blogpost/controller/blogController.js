const { BLOGNOTFOUND, BLOG_CREATED, BLOG_EDITED ,BLOG_DELETED, DATANOTFOUND } = require('../Constants/constants');
const blogModel = require('../schema/blogSchema');

// creating blogpost
const postBlog = async (req, res) => {
    try {
     const{ title, description, image } = req.body;
     const blogPost= new blogModel({
        title,
        description,
        image,
})
  const result = await blogPost.save();
   res.status(201).send({ message:BLOG_CREATED, result});
    } 
     catch (error) {
        res.status(404).send(error);
    }   
};

// getting post by id
const getPost = async(req,res) => {
    try {
        const { _id } = req.params;
         const result = await blogModel.findOne({_id});
         if(result == null) {  //checking for null values
             return res.status(404).send({ message:BLOGNOTFOUND});
        } 
      res.status(200).send(result);    //sending the result in response now
  } catch (error) {
         res.status(404).send(error);
      }
};

// getting all the blogs
  const allBlogs = async(req,res) => {
    try {
        const result = await blogModel.find();
           res.status(200).send(result);
    } catch (error) {
     res.status(404).send(error);
     }
};

// updating blog
  const editBlog = async(req, res) => {
    try {
        const { title, description  } = req.body;
        const result = await blogModel.findByIdAndUpdate({_id:req.body._id}, {$set:{ title, description }});
         res.status(200).send({message:BLOG_EDITED,result});
    } catch (error) {
        res.status(404).send({message:DATANOTFOUND,error});
    }
};

// deleting all the blogs
const deleteBlog = async(req, res) => {
    try {
        const result = await blogModel.findByIdAndDelete({_id:req.body._id});
        res.status(200).send({message:BLOG_DELETED,result});
    }
     catch( error ) {
        res.status(404).send( error );
     }
};


module.exports = {
    postBlog,
    getPost,
    allBlogs,
    editBlog,
    deleteBlog
};