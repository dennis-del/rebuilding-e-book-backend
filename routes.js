const express = require('express')

const projectController = require('./controller/projectController')

const userController = require('./controller/userController')

const jwt = require('./middleware/jwtMiddleware')

const router = new express.Router()

router.get('/book',projectController.getBook)

router.get('/audio',projectController.getAudio)

router.post('/signup',userController.signup)

router.post('/login',userController.login)

router.delete('/book/:id',projectController.deleteBook);
router.delete('/audio/:id',projectController.deleteAudio);

router.put('/book/:id',projectController.updateBook);

router.post('/book',projectController.addBook);

router.post('/audio', projectController.addAudio);


module.exports = router  