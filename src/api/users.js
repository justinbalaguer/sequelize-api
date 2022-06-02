/* eslint-disable no-console */
const express = require('express');

const User = require('../models/User');

const router = express.Router();

/* READ ALL */
router.get('/', async (req, res) => {
  await User.findAll()
    .then((data) => {
      res.json({
        data,
        message: 'success'
      });
    })
    .catch((err) => console.err(err));
});

/* READ SPECIFIC */
router.get('/details/:id', async (req, res) => {
  const { id } = req.params;
  await User.findAll({
    where: {
      id
    }
  })
    .then((data) => {
      res.json({
        data,
        message: 'success'
      });
    })
    .catch((err) => console.error(err));
});

/* ADD */
router.get('/add', async (req, res) => {
  const {
    wallet,
    name,
    phone,
    email,
    address
  } = req.body;

  await User.create({
    wallet,
    name,
    phone,
    email,
    address
  })
    .then((data) => {
      res.json({
        data,
        message: 'success'
      });
    })
    .catch((err) => console.error(err));
});

/* EDIT */
router.post('/edit/:id', async (req, res) => {
  const { id } = req.params;
  await User.update(req.body, {
    where: {
      id
    }
  })
    .then(() => {
      res.json({
        id,
        message: 'sucess'
      });
    })
    .catch((err) => console.error(err));
});

module.exports = router;
