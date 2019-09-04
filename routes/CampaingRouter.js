'use strict'

const CampaingController = require('../controllers/CampaingController');
const Auth = require('../middleware/Auth');
const { celebrate, Joi } = require('celebrate');
const express = require('express');
const api = express.Router();

api.post('/create-campaing', Auth.isAuth, celebrate({
    body: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required()
    }).unknown()
}), (err, req, res, next) => {
    res.status(200).send({ status: false, message: 'Faltan datos por enviar' });
}, CampaingController.createCampaing);

api.get('/list-all-campaing', Auth.isAuth, CampaingController.listaAllCampaing);

api.get('/user-campaing/:id?', celebrate({
    query: Joi.object({
        id: Joi.string().required()
    }).unknown()
}), (err, req, res, next) => {
    res.status(200).send({ status: false, message: 'Faltan datos por enviar' });
}, CampaingController.listCampaingById);

api.post('/update-campaing', Auth.isAuth, celebrate({
    body: Joi.object().keys({
        id: Joi.string().required(),
        title: Joi.string().required(),
        description: Joi.string().required(),
    }).unknown()
}), (err, req, res, next) => {
        res.status(200).send({ status: false, message: 'Faltan datos por enviar' });
}, CampaingController.updateCapaing);

api.get('/delete-campaing/:id?', Auth.isAuth, celebrate({
    query: Joi.object({
        id: Joi.string().required()
    }).unknown()
}), (err, req, res, next) => {
    res.status(200).send({ status: false, message: 'Faltan datos por enviar' });
}, CampaingController.deleteCampaing);

module.exports = api;