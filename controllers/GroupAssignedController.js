'use strict'

const GroupAssignedModel = require('../models/GroupAssignedModel');
const moment = require('moment');

function createGroupAssignedModel(req, res) {
    GroupAssignedModel.create(req.body, (err, data) => {
        if (err) {
            res.status(200).send({ status: false, message: "Fallo al guartar el grupo asignado" });
        } else {
            res.status(200).send({ status: true, message: "grupo asignado guardado exitosamente" });
        }
    });
}

function listaAllGroupAssignedModel(req, res) {
    GroupAssignedModel.find({ status: true }, (err, data) => {
        if (err) {
            res.status(200).send({ status: false, message: "Fallo al listar los tipos de usuarios" });
        } else {
            res.status(200).send({ status: true, data: data });
        }
    });
}

function listGroupAssignedModelById(req, res){
    GroupAssignedModel.findById(req.query, (err, data) => {
        if(err){
            res.status(200).send({ status: false, message: "Fallo al listar el grupo asignado" });
        } else {
            res.status(200).send({ status: true, data: data });
        }
    });
}

function updateGroupAssignedModel(req, res) {
    let update = req.body;
    update.updated_at = new Date(moment().toISOString());
    GroupAssignedModel.findByIdAndUpdate(update.id, update, (err, data) => {
        if (err) {
            res.status(200).send({ status: false, message: "Fallo al actualizar el tipo de dato" });
        } else {
            res.status(200).send({ status: true, message: "grupo asignado actualizadoo exitosamente" });
        }
    });
}

function deleteGroupAssignedModel(req, res){
    const query = req.query;
    GroupAssignedModel.findByIdAndUpdate(query.id, {
        status: false,
        updated_at: new Date(moment().toISOString())
    }, (err, data) => {
        if (err) {
            res.status(200).send({ status: false, message: 'Error al eliminar el grupo asignado' });
        } else {
            res.status(200).send({ status: true, message: 'Grupo asignado eliminado exitosamente' });
        }
    });
}

module.exports = {
    createGroupAssignedModel,
    listaAllGroupAssignedModel,
    listGroupAssignedModelById,
    updateGroupAssignedModel,
    deleteGroupAssignedModel
}
