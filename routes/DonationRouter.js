'use strict'

const DonationController = require('../controllers/DonationCOntroller');
const Auth = require('../middleware/Auth');
const { celebrate, Joi } = require('celebrate');
const express = require('express');
const api = express.Router();


api.post('/create-donation', celebrate({
    body: Joi.object().keys({
        id_campaing: Joi.string().required(),
        id_donor: Joi.string().required(),
        donation: Joi.number().integer().required()
    }).unknown()
}), (err, req, res, next) => {
    res.status(200).send({ status: false, message: 'Faltan datos por enviar' });
}, DonationController.createDonation);

api.get('/list-all-donation', Auth.isAuth, DonationController.listaAllDonations);

api.get('/user-type-id/:id?', celebrate({
    query: Joi.object({
        id: Joi.string().required()
    }).unknown()
}), (err, req, res, next) => {
    res.status(200).send({ status: false, message: 'Faltan datos por enviar' });
}, DonationController.listDonationById);

api.post('/update-donation', Auth.isAuth, celebrate({
    body: Joi.object().keys({
        id: Joi.string().required(),
        id_campaing: Joi.string().required(),
        id_donor: Joi.string().required(),
        donation: Joi.number().integer().required()
    }).unknown()
}), (err, req, res, next) => {
    res.status(200).send({ status: false, message: 'Faltan datos por enviar' });
}, DonationController.updateDonation);

api.get('/delete-donation/:id?', Auth.isAuth, celebrate({
    query: Joi.object({
        id: Joi.string().required()
    }).unknown()
}), (err, req, res, next) => {
    res.status(200).send({ status: false, message: 'Faltan datos por enviar' });
}, DonationController.deleteDonation);

module.exports = api;