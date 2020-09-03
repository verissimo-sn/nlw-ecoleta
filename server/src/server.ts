import express from 'express';

const app = express();

app.get('/users', (req, res) => {
  console.log('listagem de usuários');

  res.json([
    'Verissimo',
    'Mirella',
    'Jirimeldinho',
    'Juvenaldo'
  ]);
});

app.listen(3333);