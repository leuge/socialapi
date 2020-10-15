const {User}=require("../models")
const userController={
    getAllusers:function(req,res){
       User.find().then(function(userdata){
           res.json(usertdata)
       })
    },
    getUserbyId:function(req,res){
        User.find({_id:req.params._id}).then(function(userdata){
            res.json(userdata)
        })
    },
    createUser:function(req,res){
       User.create(req.body).then(function(userdata){
           res.json(userdata)
       })
    }
}

module.exports=userController