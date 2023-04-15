
const mongoose=require('mongoose')

const movieSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true,
        trim:true
    },
    genre:{
        type:String,
        require:true,
        trim:true
    },
    leadstudio:{
        type:String,
        require:true,
        trim:true
    },
    audiencescore:{
        type:Number,
        require:true
        
    },
    profitability:{
        type:Number,
        require:true
    },
    rottentomatoes:{
        type:Number,
        require:true
    },
    worldwidegross:{
        type:Number,
        require:true
    },
    year:{
        type:Number,
        require:true
    }
},{
    timestamps:true
})
module.exports=mongoose.model('Movie',movieSchema);