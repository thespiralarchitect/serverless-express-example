const express = require('express')
const app = express()
const router = express.Router()

app.use((req, res, next) => {
    console.log(`[${Date()}]: ${req.method} => ${req.path}`)
    next()
})

router.get('/', (req, res) => {
    res.send("The app is working")
})

router.get('/greet/:name', (req, res) => {
    const name = req.params.name
    res.send(`Greeting ${name}!`)
})

app.use('/api', router)

module.exports = app
