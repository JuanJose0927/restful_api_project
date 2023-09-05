const {Router} = require('express')
const categoryController = require('../../../controllers/categoryController')

//Definimos una instancia de router para acceder a los vervbos HTTP

const router = Router();

router.get('/', categoryController.getAllCategories)
router.get('/:id', categoryController.getCategory)
router.post('/', categoryController.createCategory)
router.put('/:id', categoryController.updateCategory)
router.delete('/:id', categoryController.deleteCategory)

module.exports = router;