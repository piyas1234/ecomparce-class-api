const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const AuthModel = require('../../models/AuthModel');
 
const config = require('./config')
const saltRounds = 10;


//login user
exports.getUserView =  (req, res) => {
  AuthModel.findOne({ email: req.body.email }, function (err, user) {
    if (err) return res.status(500).send("Error on the server.");
    if (!user) return res.status(404).send("No user found.");

    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid)
      return res.status(401).send({ auth: false, token: null });

    var token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400, // expires in 24 hours
    });

    res.status(200).send({ auth: true, token: token, admin:user.admin });
  });
};




//create a user view
exports.postUserView =   (req, res) => {
  console.log(req.body ,"body..............")
    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
      
      console.log(hash,"password..............")
    const newProduct = new AuthModel({
      name: req.body.name,
      email: req.body.email,
      password: hash,
      permission:req.body.permission || "user"
    });
  
    newProduct.save((err) => {
      if (err) {
        res.status(500).json({
          error: "There was a server side error",
        });
      } else {
        res.status(200).json({
          message: "User was Create successfully!",
        });
      }
    });
  });
};





exports.getAllUsersView = async (req, res) => {
  const users = await AuthModel.find({});
  res.send(users);
};


exports.getSingleUserView = async (req, res) => {
  const id = req.params.id;
  const user = await AuthModel.find({ _id: ObjectId(id) });
  res.send(user);
};

exports.DeleteSingleUserView = async (req, res) => {
  const id = req.params.id;
  const user = await AuthModel.deleteOne({ _id: ObjectId(id) });
  res.send(user);
};