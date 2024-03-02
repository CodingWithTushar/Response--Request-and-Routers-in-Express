const express = require('express')
const blog = require('./blog')

const app = express()
const port = 3000

app.use(express.static("public"))
app.use('/blog', blog)

app.get('/', (req, res) => {
    console.log('Hey its a get request');
    res.send('Hello World123!')
})

app.post('/', (req, res) => {
    console.log('Hey its a post request');
    res.send('Hello World post !')
})
app.put('/', (req, res) => {
    console.log('Hey its a put request');
    res.send('Hello World put !')
})
app.get('/index1', (req, res) => {
    console.log('Hey its a put index');
    res.sendFile('template/index1.html', { root: __dirname })
})
app.get('/api', (req, res) => {
    res.json({ a: 1, b: 2, c: 3, d: 4 })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})