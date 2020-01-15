import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';


const app = express();
app.use(cors());
app.use(bodyParser.json())



const port = 3000;


app.get('/', async (req, res) => {

});


app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});