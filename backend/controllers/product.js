const { Product, User,Seller } = require("../models/product.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { createjwt } = require("../utils/jwt.js");

exports.postCreateProduct = (req, res) => {
  console.log("server create", req.body);
  Product.create(req.body)
    .then((data) => res.json({ message: "added ", data }))
    .catch((err) => res.status(404).json({ error: err.message }));
};

exports.getAllProduct = (req, res) => {
  Product.find()
    .then((data) => res.json({ data }))
    .catch((err) => res.status(404).json({ error: err.message }));
};

exports.findProduct = (req, res) => {
  console.log("server update", req.body);
  Product.findById(req.params.id, req.body)
    .then((data) => res.json({ message: "ok", data }))
    .catch((err) => res.status(404).json({ error: err.message }));
};

exports.getProductbyFood = (req, res) => {
  console.log("get food");
  Product.find({ categorise: "food" })
    .then((data) => res.json({ data }))
    .catch((err) => res.status(404).json({ error: err.message }));
};

exports.getProductbyCloth = (req, res) => {
  console.log("get cloth");
  Product.find({ categorise: "cloth" })
    .then((data) => res.json({ data }))
    .catch((err) => res.status(404).json({ error: err.message }));
};

exports.getProductbyElectronics = (req, res) => {
  console.log("get cloth");
  Product.find({ categorise: "electronics" })
    .then((data) => res.json({ data }))
    .catch((err) => res.status(404).json({ error: err.message }));
};

/// login //

const emailRegexp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

exports.postUserSignup = (req, res) => {
  console.log("user added");
  let { username, email, password, confpassword } = req.body;

  let errors = [];
  if (!username) {
    errors.push({ username: "required" });
  }
  if (!email) {
    errors.push({ email: "required" });
  }
  if (!emailRegexp.test(email)) {
    errors.push({ email: "invalid" });
  }
  if (!password) {
    errors.push({ password: " new required" });
  }
  if (!confpassword) {
    errors.push({
      confpassword: " now required",
    });
  }

  if (password != confpassword) {
    errors.push({ password: "mismatch" });
  }
  if (errors.length > 0) {
    return res.status(422).json({ errors: errors });
  }

  User.findOne({ email: email })

    .then((user) => {
      if (user) {
        return res
          .status(422)
          .json({ errors: [{ user: "email already exists" }] });
      } else {
        const user = new User({
          username: username,
          email: email,
          password: password,
        });
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(password, salt, (err, hash) => {
            if (err) throw err;
            user.password = hash;
            user
              .save()
              .then((response) => {
                res.status(200).json({
                  success: true,
                  result: response,
                });
              })
              .catch((err) => {
                res.status(500).json({
                  errors: [{ error: err }],
                });
              });
          });
        });
      }
    })
    .catch((err) => res.status(404).json({ error: err.message }));
};

exports.postUserLogin = (req, res) => {
  let { email, password } = req.body;

  let errors = [];
  if (!email) {
    errors.push({ email: "required" });
  }
  if (!emailRegexp.test(email)) {
    errors.push({ email: "invalid email" });
  }
  if (!password) {
    errors.push({ passowrd: "required" });
  }
  if (errors.length > 0) {
   return res.status(422).json({ errors: errors });
  }



  User.findOne({ email: email }).then(user => {
    if (!user) {
      return res.status(404).json({
        errors: [{ user: "not found" }],
      });
    } else {
       bcrypt.compare(password,user.password).then(isMatch => {
        console.log(password,user.password)
          if (isMatch) {
           return res.status(400).json({ errors: [{ password:
"incorrect" }] 
           });
          }
    let access_token = createjwt(
      user.email,
      user._id,
      3600
    );
    jwt.verify(access_token, process.env.TOKEN_SECRET, (err,
decoded) => {
      if (err) {
         res.status(500).json({ erros: err });
      }
      if (decoded) {
          return res.status(200).json({
          
             success: true,
             token: access_token,
             user
          });
        }
      });
     }).catch(err => {
       res.status(500).json({ erros: err });
     });
   }
}).catch(err => {
   res.status(500).json({ erros: err });
});
};

////https://medium.com/swlh/user-authentication-using-mern-stack-part-1-backend-cd4d193f15b1

//  exports.postUserSignup=(req,res)=>{
//   console.log("user added")
//   User.create(req.body)
//   .then((data)=>res.json({ message:"user added",data}))
//   .catch((err)=>res.status(404).json({error:err.message}))
// };

// exports.postUserLogin =(req,res) => {
//   console.log("get user",req.body.email)

//   User.findOne({email:req.body.email,password:req.body.password})
//   // User.create(req.body)
//   .then((data)=>res.json({message:"login",data}))
//   .catch((err)=>res.status(404).json({error:err.message}))
//   console.log("get user")

// };



////seller




