'use strcit'

const ActivitiesController = require('../controllers/ActivitiesController'); 
const Auth = require('../middleware/Auth');
const { celebrate, Joi } = require('celebrate');
const express = require('express');
const api = express.Router();


api.post('/create-actvity', celebrate({
    body: Joi.object().keys({
        title_activity: Joi.string().required(),
        description_activity: Joi.string().required(),
        reward: Joi.number().integer().required(),
        id_type_evidence: Joi.string().required(),
        id_mission: Joi.string().required(),
    }).unknown()
}), (err, req, res, next) => {
    res.status(200).send({ status: false, message: 'Faltan datos por enviar' });
}, ActivitiesController.createActivities);

api.get('/list-all-actvity', Auth.isAuth, ActivitiesController.listaAllActivitiess);

api.get('/user-type-id/:id?', celebrate({
    query: Joi.object({
        id: Joi.string().required()
    }).unknown()
}), (err, req, res, next) => {
    res.status(200).send({ status: false, message: 'Faltan datos por enviar' });
}, ActivitiesController.listActivitiesById);

api.post('/update-actvity', Auth.isAuth, celebrate({
    body: Joi.object().keys({
        id: Joi.string().required(),
        title_activity: Joi.string().required(),
        description_activity: Joi.string().required(),
        reward: Joi.number().integer().required(),
        id_type_evidence: Joi.string().required(),
        id_mission: Joi.string().required(),
    }).unknown()
}), (err, req, res, next) => {
    res.status(200).send({ status: false, message: 'Faltan datos por enviar' });
}, ActivitiesController.updateActivities);

api.get('/delete-actvity/:id?', Auth.isAuth, celebrate({
    query: Joi.object({
        id: Joi.string().required()
    }).unknown()
}), (err, req, res, next) => {
    res.status(200).send({ status: false, message: 'Faltan datos por enviar' });
}, ActivitiesController.deleteActivities);

module.exports = api;