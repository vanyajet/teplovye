const {createServer} = require('http')

const express = require('express')
const compression = require('compression')
const morgan = require('morgan')
const path = require('path')

const normalizePort = (port) => parseInt(port, 10)
const PORT = normalizePort(443)

const app = express()

app.disable('x-powered-by')
app.use(compression())
app.use(morgan('common'))


app.use(express.static(path.join(__dirname, 'build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

const server = createServer(app)

server.listen(PORT, (err) => {
    if(err) throw err

    console.log(`server listening on port ${PORT}`)
})