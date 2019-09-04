'use strict'

const CalificationController = require('../controllers/CalificationController');
const Auth = require('../middleware/Auth');
const { celebrate, Joi } = require('celebrate');
const express = require('express');
const api = express.Router();

api.post('/create-calification', Auth.isAuth, celebrate({
    body: Joi.object().keys({
        id_group: Joi.string().required(),
        id_activity: Joi.string().required(),
        evidence: Joi.string().required(),
        observations: Joi.string().required(),
        calification: Joi.number().integer().required()
    }).unknown()
}), (err, req, res, next) => {
    res.status(200).send({ status: false, message: 'Faltan datos por enviar' });
}, CalificationController.createCalification);

api.get('/list-all-calification', Auth.isAuth, CalificationController.listaAllCalification);

api.get('/user-type-id/:id?', celebrate({
    query: Joi.object({
        id: Joi.string().required()
    }).unknown()
}), (err, req, res, next) => {
    res.status(200).send({ status: false, message: 'Faltan datos por enviar' });
}, CalificationController.listCalificationById);

api.post('/update-calification', Auth.isAuth, celebrate({
    body: Joi.object().keys({
        id: Joi.string().required(),
        id_group: Joi.string().required(),
        id_activity: Joi.string().required(),
        evidence: Joi.string().required(),
        observations: Joi.string().required(),
        calification: Joi.number().integer().required()
    }).unknown()
}), (err, req, res, next) => {
    res.status(200).send({ status: false, message: 'Faltan datos por enviar' });
}, CalificationController.updateCalification);

api.get('/delete-calification/:id?', Auth.isAuth, celebrate({
    query: Joi.object({
        id: Joi.string().required()
    }).unknown()
}), (err, req, res, next) => {
    res.status(200).send({ status: false, message: 'Faltan datos por enviar' });
}, CalificationController.deleteCalification);

module.exports = api;