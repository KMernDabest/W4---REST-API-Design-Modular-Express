import { Router } from 'express';
import {
    getJournalists,
    getJournalist,
    createJournalist,
    updateJournalist,
    deleteJournalist,
    getJournalistArticles
} from '../controllers/journalistController.js';
import { validateJournalistBody, validateJournalistId } from '../middleware/validateJournalists.js';

const router = Router();

router.route('/')
    .get(getJournalists)
    .post(validateJournalistBody, createJournalist);

router.route('/:id')
    .all(validateJournalistId)
    .get(getJournalist)
    .put(validateJournalistBody, updateJournalist)
    .delete(deleteJournalist);

router.get('/:id/articles', getJournalistArticles);

export default router;