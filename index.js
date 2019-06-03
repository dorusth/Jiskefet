const express = require('express')
const app = express()
const port = 3000
const hbs = require('express-handlebars');

// import routes
const indexRoute = require('./routes/index');

// middleware
app
    .set('view engine', 'hbs')
    .engine('hbs', hbs({
        extname: 'hbs',
        defaultView: 'default',
        layoutsDir: __dirname + '/views/layouts/',
        partialsDir: __dirname + '/views/partials/'
    }))
    .use(express.urlencoded())
    .use(express.static('public/'))
    .get('/', indexRoute)


    // server listening on port 3000
    .listen(process.env.PORT || 3000, _ => {
    console.log("listening on port 3000")
    })

