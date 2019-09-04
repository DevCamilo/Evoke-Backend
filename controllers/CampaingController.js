'use strict'

const CampaingModel  = require('../models/CampaingModel');
const moment = require('moment');


function createCampaing(req, res) {
    CampaingModel.create(req.body, (err, data) => {
        if (err) {
            res.status(200).send({ status: false, message: "Fallo al guartar la tipo de campaña" });
        } else {
            res.status(200).send({ status: true, message: "Tipo de campañas guardado exitoosamente" });
        }
    });
}

function listaAllCampaing(req, res) {
    CampaingModel.find({ status: true }, (err, data) => {
        if (err) {
            res.status(200).send({ status: false, message: "Fallo al listar los tipos de campañas" });
        } else {
            res.status(200).send({ status: true, data: data });
        }
    });
}

function listCampaingById(req, res){
    CampaingModel.findById(req.query, (err, data) => {
        if(err){
            res.status(200).send({ status: false, message: "Fallo al listar el tipo de campaña" });
        } else {
            res.status(200).send({ status: true, data: data });
        }
    });
}

function updateCapaing(req, res) {
    let update = req.body;
    update.updated_at = new Date(moment().toISOString());
    CampaingModel.findByIdAndUpdate(update.id, update, (err, data) => {
        if (err) {
            res.status(200).send({ status: false, message: "Fallo al actualizar la campaña" });
        } else {
            res.status(200).send({ status: true, message: "Campaña actualizadoo exitosamente" });
        }
    });
}

function deleteCampaing(req, res){
    const query = req.query;
    CampaingModel.findByIdAndUpdate(query.id, {
        status: false,
        updated_at: new Date(moment().toISOString())
    }, (err, data) => {
        if (err) {
            res.status(200).send({ status: false, message: 'Error al eliminar el campaña' });
        } else {
            res.status(200).send({ status: true, message: 'Campaña eliminado exitosamente' });
        }
    });
}

module.exports = {
    createCampaing,
    listaAllCampaing,
    listCampaingById,
    updateCapaing,
    deleteCampaing
}