const router=require("express").Router()
const{getAllusers,getUserbyId,createUser}=require("../../controllers/user-controller")
 router.route("/")
 .get(getAllusers)
 .post(createUser)


 router.route("/:id")
 .get(getUserbyId)
 module.exports=router