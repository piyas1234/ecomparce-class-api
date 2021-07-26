require('dotenv').config();
const cors = require('cors')
const express = require('express');
const DataConfig = require('./config/db');
const userRouter = require('./routes/AuthRoutes');
const ProductRoute = require('./routes/ProductRoutes');
const productBrandRoute = require('./routes/ProductRoutes/ProductBrandRoute');
const productCategoryRoute = require('./routes/ProductRoutes/ProductCategoryRoute');
const SliderRoute = require('./routes/SliderRoutes');
 



const app = express();
app.use(express.json());
app.use(cors());
app.use("/auth",userRouter)
app.use("/product",ProductRoute)
app.use("/category",productCategoryRoute)
app.use("/brand",productBrandRoute)
app.use("/slider",SliderRoute)



app.get('/', async (req, res) => {
  res.json({
      name:"Home Page",

  });
});




const port = process.env.PORT || 300;
DataConfig()
app.listen(port, () => console.log(`Example app listening on port ${port}!`));