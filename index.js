const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const bodyparser = require("body-parser")
const app = express()
let changes = []
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyparser.json)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.get('/', (req, res) => res.render('pages/index'))
//app.get('/test', (req, res) => res.send('Hello world'))

//gets turn number and most recent change
app.get('/poll', (req, res) => {
    res.send({
     changes: changes[changes.length-1],
     turnNumber: changes.length,
    })
})

//updates map with most recent changes
app.post('/makeChanges', (req, res) => {
 changes.push(req.body.changes)
 res.send(200)
})


















  app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

