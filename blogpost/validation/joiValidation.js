// importing joiSchema 
const { joiSignup,  joiEmail , joiEmailOTP } = require('../joiSchema/joiSchema');
//installing joi 
const Joi = require('joi');

// joi validation for signup 
const userCreateValidation = async(req, res, next) => {
     const validation  = joiSignup.validate({
        name: req.body.name,
		  email: req.body.email,
	 	  password: req.body.password,
	     phone: req.body.phone,
        address: req.body.address,
     });
    if(validation.error !== undefined) {
      res.send(validation.error.details[0].message);
    } else {
      next();
    }
};


//joi validation for read users data using email
const userEmailValidation = async(req, res, next) => {
   const validation = joiEmail.validate({
      email:req.body.email,
   });
   if(validation.error !== undefined) {
      res.send(validation.error.details[0].message);
    } else {
      next();
    }
};

// joi validation for logging user using email and otp 
// const userEmailOtpValidation = async(req,res,next) => {
//    const validation = joiEmailOTP.validate({
//       email:req.body.email,
//       otp:req.body.otp,
//    });
//    if(validation.error !== undefined) {
//       res.send(validation.error.details[0].message);
//     } else {
//       next();
//     }
// };


module.exports = {

   userCreateValidation,
   userEmailValidation,  
}