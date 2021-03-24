const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const User = mongoose.model("User")

function requireAuth(req,res,next){
  const {authorization} = req.headers
  if(!authorization){
    res.status(401).end()
  }
  const token = authorization.replace("Bearer ","")
  jwt.verify(token,"MY_SECRET_KEY",function(err,payload){
    if(err){
      res.status(401).send("You must be logged in")
      return
    }

    const {userId} = payload
    User.findById(userId)
    .then(function(user){
      req.user = user
      next()
    })
    .catch(function(err){
      console.log(err);
      res.status(400).end()
    })

  })
}

module.exports = requireAuth
