const mongoose = require('mongoose')

const  MovieSchema = new mongoose.Schema(
    {
        actor:{
            type:String,
            required: true
        },
        actress:{
            type:String,
            required:true,
        },
        movieName:{
            type:String,
            required:true
        },
        director:{
            type:String,
            required:true,
        },
        yearOfRelease:{
            type:String,
            required:true
        },

    },
    {timestamps:true}
)

module.exports = mongoose.model('Movie' , MovieSchema)