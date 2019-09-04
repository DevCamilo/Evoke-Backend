'use stricct'

const DonorController = require('../controllers/DonorController');
const Auth = require('../middleware/Auth');
const { celebrate, Joi } = require('celebrate');
const express = require('express');
const api = express.Router();

api.post('/create-donor', Auth.isAuth, celebrate({
    body: Joi.object().keys({
        id_user: Joi.string().required(),
        description: Joi.string().required()
    }).unknown()
}), (err, req, res, next) => {
    res.status(200).send({ status: false, message: 'Faltan datos por enviar' });
}, DonorController.createDonor);

api.get('/list-all-donor', Auth.isAuth, DonorController.listaAllDonors);

api.get('/user-type-id/:id?', celebrate({
    query: Joi.object({
        id: Joi.string().required()
    }).unknown()
}), (err, req, res, next) => {
    res.status(200).send({ status: false, message: 'Faltan datos por enviar' });
}, DonorController.listDonorById);

api.post('/update-donor', Auth.isAuth, celebrate({
    body: Joi.object().keys({
        id: Joi.string().required(),
        id_user: Joi.string().required(),
        description: Joi.string().required()
    }).unknown()
}), (err, req, res, next) => {
    res.status(200).send({ status: false, message: 'Faltan datos por enviar' });
}, DonorController.updateDonor);

api.get('/delete-donor/:id?', Auth.isAuth, celebrate({
    query: Joi.object({
        id: Joi.string().required()
    }).unknown()
}), (err, req, res, next) => {
    res.status(200).send({ status: false, message: 'Faltan datos por enviar' });
}, DonorController.deleteDonor);

module.exports = api;