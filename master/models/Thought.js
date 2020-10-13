const mongoose=require("mongoose")
const moment=require("moment")
const Schema=mongoose.Schema
const thoughtSchema=new Schema({
    thoughtText: {
        type: String,
        required: true,
        len:[1,280] 
    },
    createdAt: {
        type: Date,
        default: moment()
    },
    username: {
        type: String, 
        required: true
    },
    reactions: [{
        type: mongoose.Types.ObjectId,
        ref: 'Reaction'
    }]
        
},{
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
})

thoughtSchema.virtual('reactionCount').get(function() {
     
    return this.reaction.length
});
const Thought=mongoose.model("Thought",thoughtSchema)
module.exports=Thought