import { Router } from 'express';
import {
    getCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory,
    getCategoryArticles
} from '../controllers/categoryController.js';
import { validateCategoryBody, validateCategoryId } from '../middleware/validateCategories.js';

const router = Router();

router.route('/')
    .get(getCategories)
    .post(validateCategoryBody, createCategory);

router.route('/:id')
    .all(validateCategoryId)
    .get(getCategory)
    .put(validateCategoryBody, updateCategory)
    .delete(deleteCategory);

router.get('/:id/articles', getCategoryArticles);

export default router;