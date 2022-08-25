const cors = require("cors");
const express = require('express');
const bodyParser = require('body-parser')
require('./db/config');
const User = require("./db/Users");
const Companies = require("./db/company_schema")
const Comments = require("./db/comments_schema")

const app = express();
const multer = require('multer')

app.use(express.json());
app.use(cors());
app.use('/profile', express.static('uploads/images'))

const storage = multer.diskStorage({
  destination: './uploads/images',
  filename: (req, file, cb) => {
    return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }
})

const upload = multer({
  storage: storage
})

//ruote for signup
app.post("/signup", async (req, resp) => {

  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password
  resp.send(result);
})

//ruote for login
app.post("/login", async (req, resp) => {
  console.log(req.body)
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      resp.send(user)
    } else {
      resp.send({ result: "No User Found" })
    }
  } else {
    resp.send({ result: "No user Found" })
  }
  resp.send(req.body)
})

//route for add companies
app.post("/addcompany", async (req, resp) => {
  let company = new Companies(req.body);
  console.log('company :', company)
  let result = await company.save()
  resp.send(result)
})

//route  for get  company
app.get("/companies", async (req, resp) => {
  let company = await Companies.find()
  if (company.length > 0) {
    resp.send(company)
  } else {
    resp.send({ result: "No Company found" })
  }
})

//for delete compnay
app.delete("/company/:id", async (req, resp) => {
  const result = await Companies.deleteOne({ _id: req.params.id })
  resp.send(result)
});

//filter 
app.get("/search/:key", async(req,resp) =>{
  let result = await Companies.find({
    "$or":[
      {name :{$regex: req.params.key}},
      {company :{$regex: req.params.key}},
      {category :{$regex: req.params.key}}
    ]
  })
   resp.send(result)
}) 

//route for add comments
app.post("/addcomment", async (req, resp) => {
  let comment = new Comments(req.body);
  console.log('company :', comment)
  let result = await comment.save()
  resp.send(result)
});

//get company
app.get("/company/:key", async (req, resp) => {

  let id = req.params.key
  let result = await Companies.findById(id)
  resp.send(result)
  //resp.send(req.params.key)
})

app.listen(5000)
