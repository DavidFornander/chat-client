const express = require("express");
const sequelize = require('./database');
const User = require('./models/User');
const Message = require('./models/Message')
const port = 3000

sequelize.sync({ force: true }).then(() => console.log('db is ready')); // force: true (forces layout to match User.js structure.)

const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());



app.post('/users', async (req, res) => {
  await User.create(req.body);
  res.status(200).send("success");
})

app.get('/users', async (req, res) => {
  const users = await User.findAll();
  res.status(200).send(users);
})

app.get('/users/:id', async (req, res) => {
  const id = req.params.id;
  const user = await User.findOne({where: {id: id}});
  res.status(200).send(user);
})

app.put('/users/:id', async (req, res) => {
  const id = req.params.id;
  const user = await User.findOne({where: {id: id}});
  user.username = req.body.username;
  await user.save();
  res.status(200).send('updated');
})

app.delete('/users/:id', async (req, res) => {
  const id = req.params.id;
  await User.destroy({where: {id: id}});
  res.status(200).send('removed');
})

app.all('*', (req, res) => {
  res.status(404).send('<h1> Resource not found :(</h1>')
})

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});