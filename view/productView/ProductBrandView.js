const { ObjectId } = require("mongodb")
const productBrand = require("../../models/ProductModel/barandProducts")
 


exports.getProductBrandView = async (req,res)=>{
    const productsBrand = await productBrand.find({})
    res.send(productsBrand)
     
}


exports.getSingleProductBrandView = async (req,res)=>{
    const id = req.params.id
    const productsBrand = await productBrand.find({_id:ObjectId(id)})
    res.send(productsBrand)
}

exports.DeleteSingleProductBrandView = async (req, res)=>{
    const id = req.params.id
    const productsBrand = await productBrand.deleteOne({_id:ObjectId(id)})
    res.send(productsBrand)
}

exports.postProductBrandView = async (req, res) => {
    const newproductsBrand = new productBrand(req.body);
    await newproductsBrand.save((err)=>{
        if(err){
            res.status(500).json({
                error:"There was a server side error"
            })
            
        }else{
            res.status(200).json({
                message:"Brand added successfully!"
            })
        }
    })
}