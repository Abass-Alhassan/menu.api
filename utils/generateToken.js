const jwt = require ("jsonwebtoken");


exports.generateToken = (id)=>{
    return jwt.sign({id}, proceess.env.JWT_SECRET, {expireIn:"30d"})
};