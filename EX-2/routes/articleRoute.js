import { Router } from 'express';
import {
    getArticles,
    getArticle,
    createArticle,
    updateArticle,
    deleteArticle
} from '../controllers/articleController.js';
import { validateArticleBody, validateArticleId } from '../middleware/validateArticles.js';

const router = Router();

router.route('/')
    .get(getArticles)
    .post(validateArticleBody, createArticle);

router.route('/:id')
    .all(validateArticleId)
    .get(getArticle)
    .put(validateArticleBody, updateArticle)
    .delete(deleteArticle);

export default router;