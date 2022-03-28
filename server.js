const express = require('express')
const bodyParser = require('body-parser')
const { check, validationResult } = require('express-validator')

const app = express()
const port = 5000

app.use(express.static("public"));

// Set Templating Enginge
app.set('view engine', 'ejs')

const urlencodedParser = bodyParser.urlencoded({ extended: false })

// Navigation
app.get('/', (req, res)=> {
    res.render('index')
})

app.get('/signup', (req, res)=> {
    res.render('signup')
})
app.get('/user', (req, res)=> {
    res.render('user')
})
app.get('/about', (req, res)=> {
    res.render('about')
})
app.get('/buy', (req, res)=> {
    res.render('user')
})
app.get('/categories', (req, res)=> {
    res.render('categories')
})
app.get('/chapter1', (req, res)=> {
    res.render('shapter1')
})
app.get('/community', (req, res)=> {
    res.render('community')
})
app.get('/index2', (req, res)=> {
    res.render('index2')
})
app.get('/insight', (req, res)=> {npm 
    res.render('insight')
})
app.get('/library', (req, res)=> {
    res.render('library')
})
app.get('/overview', (req, res)=> {
    res.render('overview')
})
app.get('/spanish', (req, res)=> {
    res.render('spanish')
})
app.get('/arabic', (req, res)=> {
    res.render('arabic')
})
app.get('/german', (req, res)=> {
    res.render('german')
})
app.get('/french', (req, res)=> {
    res.render('french')
})
app.get('/japanese', (req, res)=> {
    res.render('japanese')
})
app.get('/login', (req, res)=> {
    res.render('login')
})
app.post('/signup', urlencodedParser, [
    check('username', 'This username must me 3+ characters long')
        .exists()
        .isLength({ min: 3 }),
    check('email', 'Email is not valid')
        .isEmail()
        .normalizeEmail()
], (req, res)=> {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        // return res.status(422).jsonp(errors.array())
        const alert = errors.array()
        res.render('signup', {
            alert
        })
    }
})

app.listen(port, () => console.info(`App listening on port: ${port}`))