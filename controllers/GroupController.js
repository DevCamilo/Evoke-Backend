'use strict'

const GroupModel = require('../models/GroupModel');
const moment = require('moment');

function createGroupModel(req, res) {
    GroupModel.create(req.body, (err, data) => {
        if (err) {
            res.status(200).send({ status: false, message: "Fallo al guartar el grupo" });
        } else {
            res.status(200).send({ status: true, message: "grupo guardado exitosamente" });
        }
    });
}

function listaAllGroupModel(req, res) {
    GroupModel.find({ status: true }, (err, data) => {
        if (err) {
            res.status(200).send({ status: false, message: "Fallo al listar los tipos de usuarios" });
        } else {
            res.status(200).send({ status: true, data: data });
        }
    });
}

function listGroupModelById(req, res){
    GroupModel.findById(req.query, (err, data) => {
        if(err){
            res.status(200).send({ status: false, message: "Fallo al listar el grupo" });
        } else {
            res.status(200).send({ status: true, data: data });
        }
    });
}

function updateGroupModel(req, res) {
    let update = req.body;
    update.updated_at = new Date(moment().toISOString());
    GroupModel.findByIdAndUpdate(update.id, update, (err, data) => {
        if (err) {
            res.status(200).send({ status: false, message: "Fallo al actualizar el tipo de dato" });
        } else {
            res.status(200).send({ status: true, message: "grupo actualizadoo exitosamente" });
        }
    });
}

function deleteGroupModel(req, res){
    const query = req.query;
    GroupModel.findByIdAndUpdate(query.id, {
        status: false,
        updated_at: new Date(moment().toISOString())
    }, (err, data) => {
        if (err) {
            res.status(200).send({ status: false, message: 'Error al eliminar el grupo' });
        } else {
            res.status(200).send({ status: true, message: 'Grupo eliminado exitosamente' });
        }
    });
}

module.exports = {
    createGroupModel,
    listaAllGroupModel,
    listGroupModelById,
    updateGroupModel,
    deleteGroupModel
}