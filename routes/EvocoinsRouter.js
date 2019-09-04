'use strict'

const EvocoinsController = require('../controllers/EvocinsController');
const Auth = require('../middleware/Auth');
const { celebrate, Joi } = require('celebrate');
const express = require('express');
const api = express.Router();

api.post('/evocoins', EvocoinsController.setTransacTion);

module.exports = api;