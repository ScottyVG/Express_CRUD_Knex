var express = require('express')
var router = express.Router()
var users = require('./users')
var posts = require('./posts')

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' })
})

router.use('/users', users)
router.use('/posts', posts)

module.exports = router
