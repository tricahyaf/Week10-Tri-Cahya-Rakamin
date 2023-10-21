const Movie = require('../model/movie')

const renderHomePage = (req, res) => {
    const data = Movie.getData()
    res.render('movie', {data})
}

const renderDonePage = (req, res) => {
    const data = Movie.getData()
    const newUser = data[data.length -1]
    res.render('done', {data : {
        data,
        title : newUser.title,
        genres : newUser.genres,
        year : newUser.year,
        photo : newUser.photo
    }})
}

module.exports = {
    renderHomePage,
    renderDonePage
}