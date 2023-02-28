const User = require('../schema/userSchema');


 // creating user
const userCreate = async( req, res ) => {
try {
    const { name, email, password, phone, address } = req.body;
    const user = new User({
        name,
        email,
        password,
        phone,
        address,
    });
    const result = await user.save();
    res.status(201).send(result);
 } catch (error) {
    res.status(404).send({ error });
}
};

// find user by  email 
const userView = async( req,res ) => { 
   try {
      const { email } = req.body;
      const data = await User.findOne({ email });
          res.status(200).send(data);
      } catch (error) {
        res.status(404).send({ error });
  }
};

 // getting all the users list data together
const allUser = async( req, res ) => {
  try {
    const result = await User.find().skip(1).limit(2);
       res.status(200).send(result);
   } catch (error) {
      res.status(404).send(error);
  }
};

 // updating user
const userUpdate = async( req, res ) => {
    try {
       const{ email, name, address } = req.body;
       const updatedUser = await User.findOneAndUpdate({email}, {$set:{ name, address }});
        res.status(200).send(updatedUser);
    } catch (error) {
        res.status(404).send(error);
    }
};

 // deleting users 
const userDelete = async( req, res ) => {
 try {
     const { _id } = req.user;
     const dataDeleted = await User.findOneAndDelete({ _id });
        res.status(200).send(dataDeleted);
    } catch (error) {
        res.status(404).send(error);
    }
};

module.exports = {
      userCreate,
      userView,
      allUser,
      userUpdate,
      userDelete,
};