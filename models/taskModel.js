import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema(
    {
        description: {
            type: String,
            required: [true, 'Task description is required'],
        },
        isCompleted: {
            type: Boolean,
            default: false,
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    },
    { timestamps: true }
);

export const Task = mongoose.model('Task', taskSchema);
