const categoryController = require('../controllers/categoryController');
const router = require('express').Router();

//middleware
const checkAdmin = require('../middleware/checkAdmin');

router.post('/', checkAdmin, categoryController.addCategory);
router.put('/:id', categoryController.updateCategory);
router.delete('/:id', categoryController.deleteCategory);
router.get('/id/:id', categoryController.getCategoryById);
router.get('/name/:name', categoryController.getCategoriesByName);
router.get('/', checkAdmin, categoryController.getCategories);
router.get(
  '/categories-sub',
  categoryController.getCategoriesWithSubcategories
);

module.exports = router;
