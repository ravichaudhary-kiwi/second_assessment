const joi = require('joi');
 
// validation for Signing up user
const joiSignup = joi.object({
    name: joi.string().min(3).max(20).required(),
    email: joi.string().email().min(8).required(),
    password: joi.string().min(6).required(),
    phone: joi.string().min(9).max(15).required(),
    address: joi.string().min(4).max(30).required(),
});

// validation for logging user
const joiLogin = joi.object({
    email: joi.string().email().min(8).required(),
    password: joi.string().min(6).required(),
});

// validation for Email along with OTP

const joiEmailOTP = joi.object({
    email: joi.string().email().min(8).required(),
    otp: joi.number().min(6).required(),
});

//validation for Email 
const joiEmail = joi.object({
    email: joi.string().email().min(8).required(),
});

module.exports = {
    joiSignup,
    joiLogin,
    joiEmailOTP,
    joiEmail,
}