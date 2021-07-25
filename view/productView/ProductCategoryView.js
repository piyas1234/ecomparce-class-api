const { ObjectId } = require("mongodb")
const productCategory = require("../../models/ProductModel/categoryProduct")
 


exports.getProductCategoryView = async (req,res)=>{
    const products = await productCategory.find({})
    res.send(products)
     
}


exports.getSingleProductCategoryView = async (req,res)=>{
    const id = req.params.id
    const product = await productCategory.find({_id:ObjectId(id)})
    res.send(product)
}

exports.DeleteSingleProductCategoryView = async (req, res)=>{
    const id = req.params.id
    const product = await productCategory.deleteOne({_id:ObjectId(id)})
    res.send(product)
}

exports.postProductCategoryView = async (req, res) => {
    const newProduct = new productCategory(req.body);
    await newProduct.save((err)=>{
        if(err){
            res.status(500).json({
                error:"There was a server side error"
            })
            
        }else{
            res.status(200).json({
                message:"Category added successfully!"
            })
        }
    })
}