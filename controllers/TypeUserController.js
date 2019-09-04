'use strict'

const TypeUserModel = require('../models/TypeUserModel');
const moment = require('moment');

function createTypeUser(req, res) {
    TypeUserModel.create(req.body, (err, data) => {
        if (err) {
            res.status(200).send({ status: false, message: "Fallo al guartar el tipo de usuario" });
        } else {
            res.status(200).send({ status: true, message: "Tipo de usuarios guardado exitosamente" });
        }
    });
}

function listaAllTypeUsers(req, res) {
    TypeUserModel.find({ status: true }, (err, data) => {
        if (err) {
            res.status(200).send({ status: false, message: "Fallo al listar los tipos de usuarios" });
        } else {
            res.status(200).send({ status: true, data: data });
        }
    });
}

function listTypeUserById(req, res){
    TypeUserModel.findById(req.query, (err, data) => {
        if(err){
            res.status(200).send({ status: false, message: "Fallo al listar el tipo de usuario" });
        } else {
            res.status(200).send({ status: true, data: data });
        }
    });
}

function updateTypeUser(req, res) {
    let update = req.body;
    update.updated_at = new Date(moment().toISOString());
    TypeUserModel.findByIdAndUpdate(update.id, update, (err, data) => {
        if (err) {
            res.status(200).send({ status: false, message: "Fallo al actualizar el tipo de dato" });
        } else {
            res.status(200).send({ status: true, message: "Tipo de usuario actualizadoo exitosamente" });
        }
    });
}

function deleteTypeUser(req, res){
    const query = req.query;
    TypeUserModel.findByIdAndUpdate(query.id, {
        status: false,
        updated_at: new Date(moment().toISOString())
    }, (err, data) => {
        if (err) {
            res.status(200).send({ status: false, message: 'Error al eliminar el usuario' });
        } else {
            res.status(200).send({ status: true, message: 'Usuario eliminado exitosamente' });
        }
    });
}

module.exports = {
    createTypeUser,
    listaAllTypeUsers,
    listTypeUserById,
    updateTypeUser,
    deleteTypeUser
}