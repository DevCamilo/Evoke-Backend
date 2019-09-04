'use strcit'

const TypeUserController = require('../controllers/TypeUserController');
const UserController = require('../controllers/UserController');
const Auth = require('../middleware/Auth');
const { celebrate, Joi } = require('celebrate');
const express = require('express');
const api = express.Router();

api.post('/create-user', Auth.isAuth, celebrate({
    body: Joi.object().keys({
        id_type_user: Joi.string().required(),
        name: Joi.string().required(),
        last_name: Joi.string().required(),
        country: Joi.string().required(),
        city: Joi.string().required(),
        campaing: Joi.array().required(),
        telephone: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required()
    }).unknown()
}), (err, req, res, next) => {
    res.status(200).send({ status: false, message: 'Faltan datos por enviar' });
}, UserController.createUser);

api.get('/user-id/:id?', celebrate({
    query: Joi.object({
        id: Joi.string().required()
    }).unknown()
}), (err, req, res, next) => {
    res.status(200).send({ status: false, message: 'Faltan datos por enviar' });
}, UserController.findUserById);

api.get('/user-all', Auth.isAuth, UserController.findAllUsers);

api.post('/update-user', Auth.isAuth, celebrate({
    body: Joi.object().keys({
        id: Joi.string().required(),
        id_type_user: Joi.string().required(),
        name: Joi.string().required(),
        last_name: Joi.string().required(),
        country: Joi.string().required(),
        city: Joi.string().required(),
        //campaing: Joi.string().required(),
        telephone: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required()
    }).unknown()
}), (err, req, res, next) => {
    if (err.details[0].path[0] == 'email') {
        res.status(200).send({ status: false, message: 'El correo no es válido' });
    } else {
        res.status(200).send({ status: false, message: 'Faltan datos por enviar' });
    }
}, UserController.updateUser);

api.get('/delete-user/:id?', Auth.isAuth, celebrate({
    query: Joi.object({
        id: Joi.string().required()
    }).unknown()
}), (err, req, res, next) => {
    res.status(200).send({ status: false, message: 'Faltan datos por enviar' });
}, UserController.deleteUser);

api.post('/login', celebrate({
    body: Joi.object().keys({
        email: Joi.string().required(),
        password: Joi.string().required()
    }).unknown()
}), (err, req, res, next) => {
    res.status(200).send({ status: false, message: 'Faltan datos por enviar' });
}, UserController.login);

api.post('/change-password', Auth.isAuth, celebrate({
    body: Joi.object().keys({
        _id: Joi.string().required(),
        password: Joi.string().required(),
        newPassword: Joi.string().required()
    }).unknown()
}), (err, req, res, next) => {
    res.status(200).send({ status: false, message: 'Faltan datos por enviar' });
}, UserController.changePassword);

api.post('/create-type-user', Auth.isAuth, celebrate({
    body: Joi.object().keys({
        name: Joi.string().required(),
        description: Joi.string().required()
    }).unknown()
}), (err, req, res, next) => {
    res.status(200).send({ status: false, message: 'Faltan datos por enviar' });
}, TypeUserController.createTypeUser);

api.get('/list-all-type-user', Auth.isAuth, TypeUserController.listaAllTypeUsers);

api.get('/user-type-id/:id?', celebrate({
    query: Joi.object({
        id: Joi.string().required()
    }).unknown()
}), (err, req, res, next) => {
    res.status(200).send({ status: false, message: 'Faltan datos por enviar' });
}, TypeUserController.listTypeUserById);

api.post('/update-type-user', Auth.isAuth, celebrate({
    body: Joi.object().keys({
        id: Joi.string().required(),
        name: Joi.string().required(),
        description: Joi.string().required(),
    }).unknown()
}), (err, req, res, next) => {
    res.status(200).send({ status: false, message: 'Faltan datos por enviar' });
}, TypeUserController.updateTypeUser);

api.get('/delete-type-user/:id?', Auth.isAuth, celebrate({
    query: Joi.object({
        id: Joi.string().required()
    }).unknown()
}), (err, req, res, next) => {
    res.status(200).send({ status: false, message: 'Faltan datos por enviar' });
}, TypeUserController.deleteTypeUser);

module.exports = api;