const mongoose = require("mongoose")
require("./models/Users")
require("./models/Track")

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const bp = require("body-parser")

const config = require("../../config.js")
const mongouri = `mongodb+srv://${config.user}:${config.pass}@cluster0.udvvp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const authRoutes = require("./routes/authRoutes")
const trackRoutes = require("./routes/trackRoutes")
const requireAuth = require("./middleware/requireAuth")
app.use(bp.json())

mongoose.connect(mongouri,{
  useNewUrlParser: true,
  useCreateIndex: true,
})

app.get("/", requireAuth,function(req,res){
  res.status(200).send("hi there" +req.user.email)
})

app.use("/",authRoutes)


app.use("/tracks",trackRoutes)
mongoose.connection.on("error",function(err){
  console.log(err);
})


mongoose.connection.on("connected",function(){
  app.listen(PORT,function(){
    console.log('-- lstening onf port',PORT);
  })
})
