const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const User = mongoose.model("User")
const jwt = require("jsonwebtoken")
const assert = require("assert")


router.post("/signup",function(req,res){

  const {email,password} = req.body
  const user = new User({email,password})
  const token = jwt.sign({userId: user._id}, "MY_SECRET_KEY")
  user.save()
  .then(function(){
    res.status(201).send({token})
  })
  .catch(function(err){
    console.log(err);
    res.status(422).end()
  })
})

router.post("/signin",function(req,res){
  const {email,password} = req.body
  if(!email || !password){
    res.status(422).send({error: "must provide email or password"})
  }
  User.findOne({email})
  .then(async function(user){
    if(!user){
      res.status(404).end()
    }
    else{
      assert(await user.comparePassword(password))
      const token = jwt.sign({userId: user._id}, "MY_SECRET_KEY")
      res.status(200).json({token})

    }
  })
  .catch(function(err){
    console.log(err);
    res.status(422).end()
  })
})


module.exports = router
