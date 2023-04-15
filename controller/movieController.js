const Movie=require('../models/movieModel');

module.exports.getMovies=async(req,res)=>{
    const movies=await Movie.find();
    res.send(movies);

}
module.exports.addMovie=async(req,res)=>{
    const {name,genre,leadstudio,audiencescore,profitability,rottentomatoes,worldwidegross,year}=req.body;


    const movie= await Movie.findOne({name});
    if(movie)return res.status(400).json({msg:"Movie already exists"});
    
    const newMovie=new Movie({name,genre,leadstudio,audiencescore,profitability,rottentomatoes,worldwidegross,year});
    await newMovie.save();
    console.log("saved sucessfully");
    
}
module.exports.deleteMovies=async(req,res)=>{
    const {_id}=req.body;
    await Movie.findByIdAndDelete(_id)
    .then(()=>{console.log("deleted sucessfully")})
    .catch((err)=>{console.log(err)})
}

module.exports.updateMovies=async(req,res)=>{
    const {_id,name,genre,leadstudio,audiencescore,profitability,rottentomatoes,worldwidegross,year}=req.body;
    await Movie.findByIdAndUpdate(_id, {name,genre,leadstudio,audiencescore,profitability,rottentomatoes,worldwidegross,year})
    .then(()=>{console.log("updated sucessfully")})
    .catch((err)=>{console.log(err)})
}
