const express = require('express')
const app = express()
const port = 3000
const socket = require('socket.io');
const hbs = require('express-handlebars');
const bodyParser = require('body-parser')

// server listening on port 3000
const server = app.listen(process.env.PORT || 3000, _ => {
    console.log("listening on port 3000")
})

// set up socket io
io = socket(server)
io.on('connection', socket => { console.log ( "user connected " + socket.id )});

// import routes
const indexRoute = require('./routes/index');

// middleware
app
    // set view engine
    .set('view engine', 'hbs')
    .engine('hbs', hbs({
        extname: 'hbs',
        defaultView: 'default',
        layoutsDir: __dirname + '/views/layouts/',
        partialsDir: __dirname + '/views/partials/'
    }))
    // body parser
    .use(bodyParser.urlencoded({
    extended: true
    }))
    // serve static files
    .use(express.static('public/'))
    // routes
    .get('/', indexRoute)


