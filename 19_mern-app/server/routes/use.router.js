const router = require('express').Router()
const userCtrl = require('../controllers/usercontroller')

router.post('/register', userCtrl.register)

module.exports = router
