"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const todolistSchema = new mongoose_1.Schema({
    description: String,
    is_finished: {
        type: Boolean,
        default: false
    },
    finished_at: String,
    createdAt: Date,
    updatedAt: Date
});
const todolistmodel = mongoose_1.model('Todos', todolistSchema);
exports.default = todolistmodel;
//# sourceMappingURL=todos.js.map