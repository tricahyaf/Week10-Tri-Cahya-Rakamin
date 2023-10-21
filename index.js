const express = require('express')
const app = express()
const port = 4000
const router = require('./routers')

app.use(express.static('static'))
app.use(express.urlencoded({ extends: true }))
app.set('view engine', 'ejs')
app.use(router)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})