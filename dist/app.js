"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const todos_1 = __importDefault(require("./models/todos"));
const app = express_1.default();
app.use(cors_1.default());
app.use(body_parser_1.default.json());
const port = 3000;
const database = process.env.MONGODB_URI || "mongodb://localhost:27017/todolist";
mongoose_1.default.connect(database, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose_1.default.connection.on("connected", () => {
    console.log(`connected to the database ${database}`);
});
mongoose_1.default.connection.on("error", () => {
    console.log(`Database error '  ${database}`);
});
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todolists = yield todos_1.default.find().exec();
        return res.status(200).send(todolists);
    }
    catch (e) {
        console.log(e);
        return res.status(422).send(e);
    }
    ;
}));
app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=app.js.map