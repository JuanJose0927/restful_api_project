const {Router} = require('express')
const articleController = require('../../../controllers/articleController')

//Definimos una instancia de router para acceder a los vervbos HTTP

const router = Router();

router.get('/', articleController.getAllArtciles)
router.get('/:articleId', articleController.getArticles)
router.post('/', articleController.createArticle)
router.put('/:articleId', articleController.updateArticle)
router.delete('/:articleId', articleController.deleteArticles)

module.exports = router;