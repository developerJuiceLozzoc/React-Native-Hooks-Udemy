const router = require("express").Router()
const mongoose = require("mongoose")
const requireAuth = require("../middleware/requireAuth")


const Track = mongoose.model("Track")

router.use(requireAuth)

router.get("/",function(req,res){
  const {user} = req
  Track.find({userId: user._id})
  .then(function(tracks){
    res.status(200).json(tracks)
  })
  .catch(function(err){
    console.log(err);
    res.status(404).end()
  })
})
router.post("/",function(req,res){
  const {name, locations} = req.body;
  if(!name || !locations){
    res.status(422).send({error: "must include name,locations"})
    return
  }
  const track = new Track({name,locations,userId: req.user._id})
  track.save()
  .then(function(){
    res.send(track)
  })
  .catch(function(err){
    console.log(err);
    res.status(400).end()
  })
})
module.exports = router
