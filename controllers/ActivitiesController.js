'use strict'

const ActivitiesModel = require('../models/ActivitiesModel');
const moment = require('moment');

function createActivities(req, res) {
    ActivitiesModel.create(req.body, (err, data) => {
        if (err) {
            res.status(200).send({ status: false, message: "Fallo al guartar la actividad" });
        } else {
            res.status(200).send({ status: true, message: "actividad guardado exitosamente" });
        }
    });
}

function listaAllActivitiess(req, res) {
    ActivitiesModel.find({ status: true }, (err, data) => {
        if (err) {
            res.status(200).send({ status: false, message: "Fallo al listar las actividades" });
        } else {
            res.status(200).send({ status: true, data: data });
        }
    });
}

function listActivitiesById(req, res){
    ActivitiesModel.findById(req.query, (err, data) => {
        if(err){
            res.status(200).send({ status: false, message: "Fallo al listar la actividad" });
        } else {
            res.status(200).send({ status: true, data: data });
        }
    });
}

function updateActivities(req, res) {
    let update = req.body;
    update.updated_at = new Date(moment().toISOString());
    ActivitiesModel.findByIdAndUpdate(update.id, update, (err, data) => {
        if (err) {
            res.status(200).send({ status: false, message: "Fallo al actualizar la tipo de dato" });
        } else {
            res.status(200).send({ status: true, message: "actividad actualizadoo exitosamente" });
        }
    });
}

function deleteActivities(req, res){
    const query = req.query;
    ActivitiesModel.findByIdAndUpdate(query.id, {
        status: false,
        updated_at: new Date(moment().toISOString())
    }, (err, data) => {
        if (err) {
            res.status(200).send({ status: false, message: 'Error al eliminar la actividad' });
        } else {
            res.status(200).send({ status: true, message: 'Actividad eliminado exitosamente' });
        }
    });
}

module.exports = {
    createActivities,
    listaAllActivitiess,
    listActivitiesById,
    updateActivities,
    deleteActivities
}