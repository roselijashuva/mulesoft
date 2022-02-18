const express = require('express')
const router = express.Router()
const moviesController = require('../controllers/movies.controller')


//create a new movie
router.post('/', moviesController.create);

//fetch all movie
router.get('/',moviesController.find);

//fetch  movies by actor name
router.get('/:actor',moviesController.findByActor);


module.exports = router