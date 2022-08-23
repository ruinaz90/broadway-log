const express = require('express')
const router = express.Router()
const logController = require('../controllers/log')

//main page
router.get('/', logController.getLog)

//add a show
router.post('/add-show', logController.addShow)

//edit and update a show
router.get('/:id', logController.getEdit)
router.post('/:id', logController.updateShow)

//delete a show
router.delete('/delete-show', logController.deleteShow)

module.exports = router
