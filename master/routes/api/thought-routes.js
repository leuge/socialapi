const router=require("express").Router()
const{getAllthoughts,getThoughtbyId,createThought}=require("../../controllers/thought-controller")
 router.route("/")
 .get(getAllthoughts)
 .post(createThought)


 router.route("/:id")
 .get(getThoughtbyId)
 module.exports=router