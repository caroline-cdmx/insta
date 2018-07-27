import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import User from './src/models/users';
import Post from './src/models/posts';
import cors from 'cors';

import { createToken } from './src/resolvers/create';
import { verifyToken } from './src/resolvers/verify';

import graphQLHTTP from 'express-graphql';
// import schema from './src/graphql';

const app = express();
const PORT = process.env.PORT || 4000;

mongoose.connect('mongodb://caroline:layton1@ds227821.mlab.com:27821/clone-instagram');

const db = mongoose.connection;
db.on('error', () => console.log("Error al conectar a la BD")).once('open', () => console.log("Conectado a la BD"));

app.use(bodyParser.json());
app.use(cors());

const requireUser = async (req, res, next) => {
  const token = req.headers['authorization'];
  try {
    req.user = await verifyToken(token);
    next();
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

app.get('/', (req, res) => {
  res.send("Estoy funcionando :)");
});

app.post('/signup', async (req, res) => {
  let user = req.body;
  try {
    await User.create(user);
    return res.status(201).json({
      "message": "Usuario Creado",
      "id": user._id
    });
  } catch (err) {
    return res.json(err);
  }
});

app.post('/login', async (req, res) => {
  try {
    const token = await createToken(req.body.email, req.body.password);
    res.status(201).json({ token });
  } catch (err) {
    res.status(403).json({
      message: "Login Failed!!! :( Invalid credentials"
    });
  }
});

app.get('/users', requireUser, async (req, res) => {
  try {
    const users = await User.find().select({
      password: 0,
      email: 0,
      followers: 0,
      following: 0,
      posts: 0
    });
    res.send({
      data: users
    });
  } catch (err) {
    return res.status(400).send({
      message: 'Retrieve records error'
    });
  }
});

app.get('/users/:id', requireUser, async (req, res) => {
  try {
    const user = await User.findById(req.params.id, 'firstName lastName photo _id').populate('followers');
    console.log('here:::::', user);
    res.send({
      data: user
    });
  } catch (err) {
    console.log('err:::::', err);
    return res.status(400).send({
      message: 'Retrieve records error'
    });
  }
});

app.post('/users/:id/follow', requireUser, async (req, res) => {
  try {
    const currentUser = await User.findById(req.user._id);
    const user = await User.findById(req.params.id);
    if (user.followers.indexOf(req.user._id) > -1) {
      await User.update({ _id: req.params.id }, { $pull: { followers: req.user._id } });
      await User.update({ _id: req.params.id }, { $pull: { following: user._id } });
    } else {
      await User.update({ _id: req.params.id }, { $push: { followers: req.user._id } });
      await User.update({ _id: req.params.id }, { $push: { following: user._id } });
    }
    res.send({
      message: 'ok'
    });
  } catch (err) {
    console.log(err);
    return res.status(400).send({
      message: 'Retrieve records error'
    });
  }
});

app.get('/posts', requireUser, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const posts = await Post.find({
      '_id': {
        $in: user.following
      }
    });
    res.send({
      data: posts
    });
  } catch (err) {
    return res.status(400).send({
      message: 'Retrieve records error'
    });
  }
});

app.get('/posts/:id', requireUser, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id, 'description imageUrl location likers').populate('followers following posts');
    res.send({
      data: post
    });
  } catch (err) {
    return res.status(400).send({
      message: 'Retrieve records error'
    });
  }
});

app.post('/posts/:id', requireUser, async (req, res) => {
  try {
    const post = await Post.create(req.body);
    await User.update({ _id: req.user._id }, { $push: { posts: post._id } });
    res.send({
      data: post
    });
  } catch (err) {
    return res.status(400).send({
      message: 'Retrieve records error'
    });
  }
});

app.delete('/posts/:id', requireUser, async (req, res) => {
  try {
    const post = await Post.delete(req.param.id);
    res.send({
      message: 'ok'
    });
  } catch (err) {
    return res.status(400).send({
      message: 'Retrieve records error'
    });
  }
});

app.post('/posts/:id/like', requireUser, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.likers.indexOf(req.user._id) > -1) {
      await Post.update({ _id: req.params.id }, { $pull: { likers: req.user._id } });
    } else {
      await Post.update({ _id: req.params.id }, { $push: { likers: req.user._id } });
    }
    res.send({
      data: post
    });
  } catch (err) {
    return res.status(400).send({
      message: 'Retrieve records error'
    });
  }
});

app.listen(PORT, () => {
  console.log(`Magic happens in port ${PORT}`);
});