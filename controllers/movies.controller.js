const Movie = require('../models/Movies')

// method to create a movie
exports.create = async (req , res) => {
   
    const newMovie = new Movie(req.body)

    try 
    {
        const savedMovie = await newMovie.save()

        res.status(200).send({
            status:true,
            message:'new movie created successfully',
            data:savedMovie
        })
    } 
    catch (error) {
        res.status(500).send({
            status:false,
            message:'internal server error',
            data:error
        })
    }
}
// to find all the movies 
exports.find = async (req , res) => {
    try 
    {
        const allMovies = await Movie.find()
        res.status(200).send(allMovies)
    } 
    catch (error) {
        res.status(500).send({
            status:false,
            message:'internal server error',
            data:error
        })
    }
}
// to find all movies based on actor's name
exports.findByActor = async (req , res) => {
    try 
    {
        const movies = await Movie.find({"actor" : req.params.actor})
        res.status(200).send({
            status:true,
            message:'fetched successfully',
            data:movies
        })
    } 
    catch (error) {
        res.status(500).send({
            status:false,
            message:'internal server error',
            data:error
        })
    }
}
