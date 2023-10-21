const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination : function (req, res, cb) {
        cb(null, path.join(__dirname, '../static/upload'))
    },
    filename: function(req, res, cb) {
        cb (
            null,
            'upload-' + Date.now() + '.png'
        )
    }
})

module.exports = multer ({storage})