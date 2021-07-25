const { getUserView, postUserView, getAllUsersView, getSingleUserView, DeleteSingleUserView } = require('../../view/AuthView');

 
const userRouter = require('express').Router()
 

userRouter.post("/login", getUserView)
userRouter.post("/signup", postUserView)
userRouter.get("/users", getAllUsersView)
userRouter.get("/user/:id", getSingleUserView)
userRouter.delete("/user/:id", DeleteSingleUserView)



module.exports = userRouter;