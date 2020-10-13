const router=require("express").Router()
const thoughtRoute=require("./thought-routes")
const userRoute=require("./user-routes")

router.use("/users",userRoute)
router.use("/thought", thoughtRoute)
module.exports=router
