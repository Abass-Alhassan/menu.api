const User = require("../models/userSchema")
const bcrypt = require("bcryptjs")
const validate = require("../config/validator")

//create new user

const createUser = async (req, res)=>{
    const {username, email, password} = req.body;
const valid = await validate({username, email, password});


if (valid){
const hashPassword = await bcrypt.hash(valid.password,10);
const user = new user({
    username,
    email,
    password:hashPassword,
});
await user.save();
res.status(201).json({
    message: "User create successfully",
    user,
});
} else {
    res.status(400).json({
        message:"Invalid data",
    });
}
};
module.exports = {createUser,};