import { Router } from 'express';
import {
    getAllUsers,
    getUser,
    postUser,
    putUser,
    deleteUser
} from '../controllers/userController.js';

const router = Router();

router.get('/', getAllUsers);
router.get('/:id', getUser);
router.post('/', postUser);
router.put('/:id', putUser);
router.delete('/:id', deleteUser);

export default router;