const Movie = require('../model/movie')

const getMovies = (req, res) => {
    const data = Movie.getData()
    res.status(200).json({
        data
    })
}

const addMovies = (req, res) => {
    const {title, genres, year} = req.body
    console.log(title, genres, year)
    const data = Movie.addData({title, genres, year})
    res.redirect('/done')
}

const uploads = (req, res) => {
    res.status(200).json({
        message: 'Upload Success'
    })
}

module.exports = {
    getMovies,
    addMovies,
    uploads
}