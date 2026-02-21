import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: {
        type: String,
        require: [true, 'This is Required'],
    },
    email: {
        type: String,
        require: [true, 'This is Required'],
        unique: true,
    },
    password: {
        type: String,
        require: [true, 'This is Required'],
    },
    role: {
        type: String,
        default: 'user',
    },
});

export const User = mongoose.model('User', userSchema);
