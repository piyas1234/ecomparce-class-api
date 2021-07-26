const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const AuthModel = require("../../models/AuthModel");
const { ObjectId } = require("bson")  
const config = require("./config");
const saltRounds = 10;

//login user
exports.getUserView = (req, res) => {
  AuthModel.findOne({ email: req.body.email }, function (err, user) {
    if (err) return res.status(500).send("Error on the server.");
    if (!user) return res.status(404).send("No user found.");

    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid)
      return res.status(401).send({ auth: false, token: null });

    var token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400, // expires in 24 hours
    });

    res.status(200).send({ auth: true, token: token, admin: user.admin });
  });
};

//create a user view
exports.postUserView = (req, res) => {
  console.log(req.body, "body..............");
  bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
    console.log(hash, "password..............");
    const newProduct = new AuthModel({
      name: req.body.name,
      email: req.body.email,
      password: hash,
      permission: req.body.permission || "user",
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
  const { page = 1, limit = 10 } = req.query;
  try {
    const users = await AuthModel.find({})
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();
    const count = await AuthModel.countDocuments();
    await res.send({
      users,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getSingleUserView = async (req, res) => {
  const id = req.params.id;
  try {
     
    const user = await AuthModel.find({ _id: ObjectId(id) });
    await res.send(user);
  } catch (err) {
    await res.send(err);
  }
};

exports.DeleteSingleUserView = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await AuthModel.deleteOne({ _id: ObjectId(id) });
    await res.send(user);
  } catch (err) {
    await res.send(err);
  }
};


exports.UpdateSingleUsers = async (req,res)=>{

  try{
    const id = req.params.id;
   const response = await AuthModel.updateOne({ _id: ObjectId(id) }, req.body);
   await res.send(response)
  }

  catch(err){
    res.send(err)
  }
}