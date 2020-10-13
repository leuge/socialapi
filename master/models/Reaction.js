const mongoose=require("mongoose")
const moment=require("moment")
const Schema=mongoose.Schema
const reactionSchema=new Schema({
    reactionId: {
        type: mongoose.Types.ObjectId,
        default: function () { return new ObjectId()}
    },
    reactionBody: {
        type: String, 
        required: true, 
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date, 
        default: moment()
    }
},{
    toJSON: {
      getters: true,
    },
    id: false,
  })

module.exports=reactionSchema