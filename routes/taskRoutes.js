import express from 'express';
import * as taskControlles from '../controllers/taskController.js';
import checkAuth from '../middlewares/checkAuth.js';
import checkRole from '../middlewares/checkRole.js';

const router = express.Router();

router.use(checkAuth);

router.post('/task', taskControlles.createTask);

router.get('/task', taskControlles.getTasksByUserId);
router.get('/task/all', checkRole, taskControlles.getAllTasks);

router.get('/task/:id', taskControlles.getTask);
router.put('/task/:id', taskControlles.updateTask);
router.delete('/task/:id', taskControlles.deleteTask);


export default router;
