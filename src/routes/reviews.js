const express = require('express')
const router = express.Router()
const dataController = require('../controllers/reviews')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////

router.get('/snacks/:id/reviews', dataController.getAll)
router.get('/snacks/:id/reviews/:reviewId', dataController.getOne)
router.post('/snacks/:id/reviews/', dataController.create)
router.put('/snacks/:id/reviews/:reviewId', dataController.modify)
router.delete('/snacks/:id/reviews/:reviewId', dataController.remove)

module.exports = router
