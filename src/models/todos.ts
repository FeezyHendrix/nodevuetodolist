import { Schema, model, Model } from 'mongoose';


const todolistSchema = new Schema({
    description: String,
    is_finished: {
        type: Boolean,
        default: false
    },
    finished_at: String,
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
});

const todolistmodel: Model<any>  = model('Todos', todolistSchema);

export default todolistmodel;