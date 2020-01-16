import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import todolistmodel  from './models/todos';
import path from 'path';

const app = express();
app.use(cors());
app.use(bodyParser.json())
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


const port = 3000;


const database = process.env.MONGODB_URI || "mongodb://localhost:27017/todolist";

mongoose.connect(database, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true 
});

mongoose.connection.on("connected", () => {
  console.log(`connected to the database ${database}`);
});

mongoose.connection.on("error", () => {
  console.log(`Database error '  ${database}`);
});

app.get('/', async (req, res) => {
    try {
        const todolists = await todolistmodel.find().exec();
        return res.render('index', { data: JSON.stringify(todolists)});
    } catch(e) {
        console.log(e);  
        return res.status(422).send(e);
    };
});


app.post('/todolist', async (req, res) => {
    try {
        const dataInstance = new todolistmodel(req.body);
        await dataInstance.save();

        return res.status(200).send(dataInstance);
    } catch(e) {
        console.log(e);
        return res.status(422).send(e);
    }
});


app.patch('/todolist/:id', async(req, res) => {
    try {
        const id: string = req.params.id;
        await todolistmodel.findByIdAndUpdate(id, req.body).exec();
        
        return res.status(200).json({ message: 'updated succesfully' });
    } catch(e) {
        console.log(e);
        return res.status(422).send(e);
    }
})


app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});