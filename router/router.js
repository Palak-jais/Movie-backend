const {Router}=require('express')

const {addMovie,getMovies,deleteMovies,updateMovies}=require('../controller/movieController');
const router=Router();
router.get('/',getMovies);
router.post('/add',addMovie);
router.post('/delete',deleteMovies);
router.post('/update',updateMovies);

module.exports=router;