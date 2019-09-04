'use strict'

const GroupController = require('../controllers/GroupController');
const GroupAssigned = require('../controllers/GroupAssignedController');
const Auth = require('../middleware/Auth');
const { celebrate, Joi } = require('celebrate');
const express = require('express');
const api = express.Router();

api.post('/create-group', Auth.isAuth, celebrate({
    body: Joi.object().keys({
        name: Joi.string().required(),
        id_users: Joi.array().required()
    }).unknown()
}), (err, req, res, next) => {
    res.status(200).send({ status: false, message: 'Faltan datos por enviar' });
}, GroupController.createGroupModel);

api.get('/list-all-group', Auth.isAuth, GroupController.listaAllGroupModel);

api.get('/user-type-id/:id?', celebrate({
    query: Joi.object({
        id: Joi.string().required()
    }).unknown()
}), (err, req, res, next) => {
    res.status(200).send({ status: false, message: 'Faltan datos por enviar' });
}, GroupController.listaAllGroupModel);

api.post('/update-group', Auth.isAuth, celebrate({
    body: Joi.object().keys({
        id: Joi.string().required(),
        name: Joi.string().required(),
        id_users: Joi.array().required()
    }).unknown()
}), (err, req, res, next) => {
    res.status(200).send({ status: false, message: 'Faltan datos por enviar' });
}, GroupController.updateGroupModel);

api.get('/delete-group/:id?', Auth.isAuth, celebrate({
    query: Joi.object({
        id: Joi.string().required()
    }).unknown()
}), (err, req, res, next) => {
    res.status(200).send({ status: false, message: 'Faltan datos por enviar' });
}, GroupController.deleteGroupModel);

api.post('/create-group-assigned', Auth.isAuth, celebrate({
    body: Joi.object().keys({
        id_campaing: Joi.string().required(),
        id_group: Joi.string().required(),
        description: Joi.string().required()
    }).unknown()
}), (err, req, res, next) => {
    res.status(200).send({ status: false, message: 'Faltan datos por enviar' });
}, GroupAssigned.createGroupAssignedModel);

api.get('/list-all-group-assigned', Auth.isAuth, GroupAssigned.listaAllGroupAssignedModel);

api.get('/group-assigned-id/:id?', celebrate({
    query: Joi.object({
        id: Joi.string().required()
    }).unknown()
}), (err, req, res, next) => {
    res.status(200).send({ status: false, message: 'Faltan datos por enviar' });
}, GroupAssigned.listGroupAssignedModelById);

api.post('/update-group-assigned', Auth.isAuth, celebrate({
    body: Joi.object().keys({
        id: Joi.string().required(),
        id_campaing: Joi.string().required(),
        id_group: Joi.string().required(),
        description: Joi.string().required()
    }).unknown()
}), (err, req, res, next) => {
    res.status(200).send({ status: false, message: 'Faltan datos por enviar' });
}, GroupAssigned.updateGroupAssignedModel);

api.get('/delete-group-assigned/:id?', Auth.isAuth, celebrate({
    query: Joi.object({
        id: Joi.string().required()
    }).unknown()
}), (err, req, res, next) => {
    res.status(200).send({ status: false, message: 'Faltan datos por enviar' });
}, GroupAssigned.deleteGroupAssignedModel);

module.exports = api;