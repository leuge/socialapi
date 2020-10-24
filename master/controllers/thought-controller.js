const {Thought,User}=require("../models")
const thoughtController={
    getAllthoughts:function(req,res){
       Thought.find().then(function(thoughtdata){
           res.json(thoughtdata)
       })
       .catch((err) => {
        console.log(err);
        res.status(500).json(err);
        });
    },
    getThoughtbyId:function(req,res){
        Thought.find({_id:req.params._id}).then(function(thoughtdata){
            res.json(thoughtdata)
        })
    },
    createThought:function(req,res){
       Thought.create(req.body).then(function(thoughtdata){
           res.json(thoughtdata)
       })
    }
}

module.exports=thoughtController