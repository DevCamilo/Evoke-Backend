'uses strict'

const MissionModel = require('../models/MissionModel');
const moment = require('moment');

function createMissionModel(req, res) {
    MissionModel.create(req.body, (err, data) => {
        if (err) {
            res.status(200).send({ status: false, message: "Fallo al guartar la misión" });
        } else {
            res.status(200).send({ status: true, message: "misións guardado exitosamente" });
        }
    });
}

function listaAllMissionModel(req, res) {
    MissionModel.find({ status: true }, (err, data) => {
        if (err) {
            res.status(200).send({ status: false, message: "Fallo al listar las misiones" });
        } else {
            res.status(200).send({ status: true, data: data });
        }
    });
}

function listMissionModelById(req, res){
    MissionModel.findById(req.query, (err, data) => {
        if(err){
            res.status(200).send({ status: false, message: "Fallo al listar las misión" });
        } else {
            res.status(200).send({ status: true, data: data });
        }
    });
}

function updateMissionModel(req, res) {
    let update = req.body;
    update.updated_at = new Date(moment().toISOString());
    MissionModel.findByIdAndUpdate(update.id, update, (err, data) => {
        if (err) {
            res.status(200).send({ status: false, message: "Fallo al actualizar la mision" });
        } else {
            res.status(200).send({ status: true, message: "misión actualizadoo exitosamente" });
        }
    });
}

function deleteMissionModel(req, res){
    const query = req.query;
    MissionModel.findByIdAndUpdate(query.id, {
        status: false,
        updated_at: new Date(moment().toISOString())
    }, (err, data) => {
        if (err) {
            res.status(200).send({ status: false, message: 'Error al eliminar el misión' });
        } else {
            res.status(200).send({ status: true, message: 'Misión eliminado exitosamente' });
        }
    });
}

module.exports = {
    createMissionModel,
    listaAllMissionModel,
    listMissionModelById,
    updateMissionModel,
    deleteMissionModel
}