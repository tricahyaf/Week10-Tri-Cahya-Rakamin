const router = require('express').Router()
const {viewController, modelController} = require('../controller')
const multer = require('../middleware/multer')

// view route
router.get('/', viewController.renderHomePage)
router.get('/done', viewController.renderDonePage)

// API route
router.get('/api/movies', modelController.getMovies)
router.post('/api/movies', modelController.addMovies)
router.post('/api/uploads', multer.single('photo'),modelController.uploads)

module.exports = router