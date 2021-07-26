const mongoose = require("mongoose");

const DataConfig = () => {
    mongoose
    .connect(process.env.URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })
    .then(() => console.log("connection successfull"))
    .catch((err) => console.log(err));
};
module.exports = DataConfig;
