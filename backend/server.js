const express = require("express");

const sequelize = require('./database');
const user_account = require('./models/user_account');
const post_comment = require('./models/post_comment')
const user_post = require('./models/user_post')

const port = 3000

// Init database
sequelize.sync({ force: true }).then(() => console.log('db is ready')); // force: true (forces layout to match User.js structure.)

const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// --- Handle requests ----

// User requests
app.post('/users', async (req, res) => {
  await user_account.create(req.body);
  res.status(200).send("success");
})

app.get('/users', async (req, res) => {
  const users = await user_account.findAll();
  res.status(200).send(users);
})

app.get('/users/:user_id', async (req, res) => {
  const id = req.params.user_id;
  const user = await user_account.findOne({where: {user_id: id}});
  res.status(200).send(user);
})

app.put('/users/:user_id', async (req, res) => {
  const id = req.params.user_id;
  const user = await user_account.findOne({where: {user_id: id}});
  user.username = req.body.username;
  await user.save();
  res.status(200).send('updated');
})

app.delete('/users/:user_id', async (req, res) => {
  const id = req.params.user_id;
  await user_account.destroy({where: {user_id: id}});
  res.status(200).send('removed');
})

// Post requests
app.get('/posts', async (req, res) => {
  const posts = await user_post.findAll();
  res.status(200).send(posts);
})

app.post('/posts', async (req, res) => {
  await user_post.create(req.body);
  res.status(200).send("success");
})

// Comment requests
app.get('/posts', async (req, res) => {
  const comments = await post_comment.findAll();
  res.status(200).send(comments);
})

app.post('/posts', async (req, res) => {
  await post_comment.create(req.body);
  res.status(200).send("success");
})

// Default fallback (Recource not found)
app.all('*', (req, res) => {
  res.status(404).send('<h1> Resource not found :(</h1>')
})

// Listen to requests
app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});