const express = require('express')

const router = express.Router()

const controller = require('../controller/seriesController')

router.get('/series', controller.gettAllSeries)
router.get('/series/genero', controller.getGenero)
router.get('/series/:id', controller.getPesquisar)
router.post('adicionar', controller.postSeries)
router.delete('/series/:id', controller.deleteSerie)
router.patch('/series/:id/liked', controller.updateSeries)


modules.exports = router