import express from 'express';

const routs = express.Router();

routs.get('/', (req, res) => {
  return res.json({ massage: 'Helo World' });
});

export default routs;