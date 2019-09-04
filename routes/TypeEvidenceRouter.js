'use strict'

const TypeEvidenceController = require('../controllers/TypeEvidenceController');
const Auth = require('../middleware/Auth');
const { celebrate, Joi } = require('celebrate');
const express = require('express');
const api = express.Router();

api.post('/create-type-evidence', celebrate({
    body: Joi.object().keys({
        name: Joi.string().required(),
        description: Joi.string().required()
    }).unknown()
}), (err, req, res, next) => {
    res.status(200).send({ status: false, message: 'Faltan datos por enviar' });
}, TypeEvidenceController.createTypeEvidence);

api.get('/list-all-type-evidence', Auth.isAuth, TypeEvidenceController.listaAllTypeEvidence);

api.get('/evidence-type-id/:id?', celebrate({
    query: Joi.object({
        id: Joi.string().required()
    }).unknown()
}), (err, req, res, next) => {
    res.status(200).send({ status: false, message: 'Faltan datos por enviar' });
}, TypeEvidenceController.listTypeEvidenceById);

api.post('/update-type-evidence', Auth.isAuth, celebrate({
    body: Joi.object().keys({
        id: Joi.string().required(),
        name: Joi.string().required(),
        description: Joi.string().required(),
    }).unknown()
}), (err, req, res, next) => {
    res.status(200).send({ status: false, message: 'Faltan datos por enviar' });
}, TypeEvidenceController.updateTypeEvidence);

api.get('/delete-type-evidence/:id?', Auth.isAuth, celebrate({
    query: Joi.object({
        id: Joi.string().required()
    }).unknown()
}), (err, req, res, next) => {
    res.status(200).send({ status: false, message: 'Faltan datos por enviar' });
}, TypeEvidenceController.deleteTypeEvidence);

module.exports = api;