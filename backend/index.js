import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import User from './src/models/users';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 4000

mongoose.connect('mongodb://caroline:layton1@ds227821.mlab.com:27821/clone-instagram');

const db = mongoose.connection;
db.on('error', ()=>console.log("Error al conectar a la BD"))
  .once('open',()=> console.log("Conectado a la BD"))

app.use(bodyParser.json());
app.use(cors());

app.post('/signup',(req,res)=> {
   let user = req.body;
   User.create(user).then(() => {
    return res.status(201).json({"message":"Usuario Creado",
    "id": user._id})
   }).catch((err)=>{
     console.log(err);
    return res.json(err);
   })
})

app.get('/', (req,res) => {
  res.send("Estoy funcionando :)");
})

app.listen(PORT, ()=> {
  console.log(`Magic happens in port ${PORT}`);
})