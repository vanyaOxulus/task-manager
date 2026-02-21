import { Task } from '../models/taskModel.js';

export const createTask = async (req, res) => {
    try {
        const { description } = req.body;
        const userId = req.user.id;

        const taskObj = {
            description,
            createdBy: userId,
        };

        const task = await Task.create(taskObj);

        return res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ messege: 'Filed to create the task' });
    }
};

export const updateTask = async (req, res) => {
    try {
        const userId = req.user.id;
        const taskId = req.params.id;

        const task = await Task.findOneAndUpdate(
            {
                _id: taskId,
                createdBy: userId,
            },
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );

        if (!task) {
            return res.status(404).json({ messege: 'Task not Found' });
        }

        return res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ messege: 'Filed to update the task' });
    }
};

export const deleteTask = async (req, res) => {
    try {
        const userId = req.user.id;
        const taskId = req.params.id;

        const task = await Task.findByIdAndDelete({
            _id: taskId,
            createdBy: userId,
        });

        if (!task) {
            return res.status(404).json({ messege: 'Task not Found' });
        }

        return res.status(201).json({ messege: 'Task deleted successfully' });
    } catch (error) {
        res.status(400).json({ messege: 'Filed to delete the task' });
    }
};

export const getTasksByUserId = async (req, res) => {
    try {
        const userId = req.user.id;

        const tasks = await Task.find({
            createdBy: userId,
        });

        return res.status(201).json(tasks);
    } catch (error) {
        res.status(400).json({ messege: 'Filed to find the tasks' });
    }
};

export const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();

        return res.status(201).json(tasks);
    } catch (error) {
        res.status(400).json({ messege: 'Failed to find the tasks' });
    }
};

export const getTask = async (req, res) => {
    try {
        const userId = req.user.id;
        const taskId = req.params.id;

        const task = await Task.findOne({
            _id: taskId,
            createdBy: userId,
        });

        if (!task) {
            return res.status(404).json({ messege: 'Task not Found' });
        }

        return res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ messege: 'Filed to find the task' });
    }
};
