'use strict'

const TypeEvidenceModule = require('../models/TypeEvidenceModel');
const moment = require('moment');


function createTypeEvidence(req, res) {
    TypeEvidenceModule.create(req.body, (err, data) => {
        if (err) {
            res.status(200).send({ status: false, message: "Fallo al guartar el tipo de evidencia" });
        } else {
            res.status(200).send({ status: true, message: "Tipo de evidencia guardado exitosamente" });
        }
    });
}

function listaAllTypeEvidence(req, res) {
    TypeEvidenceModule.find({ status: true }, (err, data) => {
        if (err) {
            res.status(200).send({ status: false, message: "Fallo al listar los tipos de evidencia" });
        } else {
            res.status(200).send({ status: true, data: data });
        }
    });
}

function listTypeEvidenceById(req, res) {
    TypeEvidenceModule.findById(req.query, (err, data) => {
        if (err) {
            res.status(200).send({ status: false, message: "Fallo al listar el tipo de evidencia" });
        } else {
            res.status(200).send({ status: true, data: data });
        }
    });
}

function updateTypeEvidence(req, res) {
    let update = req.body;
    update.updated_at = new Date(moment().toISOString());
    TypeEvidenceModule.findByIdAndUpdate(update.id, update, (err, data) => {
        if (err) {
            res.status(200).send({ status: false, message: "Fallo al actualizar el tipo de dato" });
        } else {
            res.status(200).send({ status: true, message: "Tipo de evidencia actualizadoo exitosamente" });
        }
    });
}

function deleteTypeEvidence(req, res) {
    const query = req.query;
    TypeEvidenceModule.findByIdAndUpdate(query.id, {
        status: false,
        updated_at: new Date(moment().toISOString())
    }, (err, data) => {
        if (err) {
            res.status(200).send({ status: false, message: 'Error al eliminar el tipo de evidencia' });
        } else {
            res.status(200).send({ status: true, message: 'Tipo de evidencia eliminado exitosamente' });
        }
    });
}
module.exports = {
    createTypeEvidence,
    listTypeEvidenceById,
    listaAllTypeEvidence,
    updateTypeEvidence,
    deleteTypeEvidence
}