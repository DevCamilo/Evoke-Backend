'use strict'

const MissionController = require('../controllers/MissionController');
const Auth = require('../middleware/Auth');
const { celebrate, Joi } = require('celebrate');
const express = require('express');
const api = express.Router();

api.post('/create-mission', celebrate({
    body: Joi.object().keys({
        titel_mission: Joi.string().required(),
        description_mission: Joi.string().required(),
        reward: Joi.number().integer().required(),
        id_campaing: Joi.string().required(),
    }).unknown()
}), (err, req, res, next) => {
    res.status(200).send({ status: false, message: 'Faltan datos por enviar' });
}, MissionController.createMissionModel);

api.get('/list-all-mission', Auth.isAuth, MissionController.listaAllMissionModel);

api.get('/evidence-type-id/:id?', celebrate({
    query: Joi.object({
        id: Joi.string().required()
    }).unknown()
}), (err, req, res, next) => {
    res.status(200).send({ status: false, message: 'Faltan datos por enviar' });
}, MissionController.listMissionModelById);

api.post('/update-mission', Auth.isAuth, celebrate({
    body: Joi.object().keys({
        id: Joi.string().required(), 
        titel_mission: Joi.string().required(),
        description_mission: Joi.string().required(),
        reward: Joi.number().integer().required(),
        id_campaing: Joi.string().required(),
    }).unknown()
}), (err, req, res, next) => {
    res.status(200).send({ status: false, message: 'Faltan datos por enviar' });
}, MissionController.updateMissionModel);

api.get('/delete-mission/:id?', Auth.isAuth, celebrate({
    query: Joi.object({
        id: Joi.string().required()
    }).unknown()
}), (err, req, res, next) => {
    res.status(200).send({ status: false, message: 'Faltan datos por enviar' });
}, MissionController.deleteMissionModel);

module.exports = api;