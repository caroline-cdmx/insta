import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import User from './src/models/users';
import cors from 'cors';

import { createToken } from './src/resolvers/create';
import { verifyToken } from './src/resolvers/verify'

import graphQLHTTP from 'express-graphql';
// import schema from './src/graphql';

const app = express();
const PORT = process.env.PORT || 4000

mongoose.connect('mongodb://caroline:layton1@ds227821.mlab.com:27821/clone-instagram');

const db = mongoose.connection;
db.on('error', () => console.log("Error al conectar a la BD"))
  .once('open', () => console.log("Conectado a la BD"))

app.use(bodyParser.json());
app.use(cors());

app.post('/signup', async (req, res) => {
  let user = req.body;
  console.log(user)
  try {
    await User.create(user)
    return res.status(201).json({
      "message": "Usuario Creado",
      "id": user._id
    })
  } catch (err) {
    console.log(err);
    return res.json(err);
  }
})

app.post('/login', async (req, res) => {
  try {
    const token = await createToken(req.body.email, req.body.password)
    res.status(201).json({ token });
  } catch (err) {
    res.status(403).json({
      message: "Login Failed!!! :( Invalid credentials"
    })
  }
})

app.get('/', (req, res) => {
  res.send("Estoy funcionando :)");
})

// //Middleware para proteger graphql 
// app.use('./graphql', (req, res, next) => {
//   const token = req.headers['authorization'];
//   try {
//     req.user = verifyToken(token)
//     next();
//   } catch (error) {
//     res.status(401).json({ message: error.message })
//   }
// })

// app.use('/graphql', graphQLHTTP((req, res) => ({
//   schema,
//   graphiql: true,
//   pretty: true,
//   context: {
//     user: req.user
//   }
// })))

app.listen(PORT, () => {
  console.log(`Magic happens in port ${PORT}`);
})