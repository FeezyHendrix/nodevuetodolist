import { Schema, model, Model } from 'mongoose';


const todolistSchema = new Schema({
    description: String,
    is_finished: {
        type: Boolean,
        default: false
    },
    finished_at: String,
    createdAt: Date,
    updatedAt: Date
});

const todolistmodel: Model<any>  = model('Todos', todolistSchema);

export default todolistmodel;