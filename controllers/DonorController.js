'use strict'

const DonorModel = require('../models/DonorModel');
const moment = require('moment');

function createDonor(req, res) {
    DonorModel.create(req.body, (err, data) => {
        if (err) {
            res.status(200).send({ status: false, message: "Fallo al guartar el donador" });
        } else {
            res.status(200).send({ status: true, message: "donador guardado exitosamente" });
        }
    });
}

function listaAllDonors(req, res) {
    DonorModel.find({ status: true }, (err, data) => {
        if (err) {
            res.status(200).send({ status: false, message: "Fallo al listar los tipos de usuarios" });
        } else {
            res.status(200).send({ status: true, data: data });
        }
    });
}

function listDonorById(req, res) {
    DonorModel.findById(req.query, (err, data) => {
        if (err) {
            res.status(200).send({ status: false, message: "Fallo al listar el donador" });
        } else {
            res.status(200).send({ status: true, data: data });
        }
    });
}

function updateDonor(req, res) {
    let update = req.body;
    update.updated_at = new Date(moment().toISOString());
    DonorModel.findByIdAndUpdate(update.id, update, (err, data) => {
        if (err) {
            res.status(200).send({ status: false, message: "Fallo al actualizar el donador" });
        } else {
            res.status(200).send({ status: true, message: "donador actualizadoo exitosamente" });
        }
    });
}

function deleteDonor(req, res) {
    const query = req.query;
    DonorModel.findByIdAndUpdate(query.id, {
        status: false,
        updated_at: new Date(moment().toISOString())
    }, (err, data) => {
        if (err) {
            res.status(200).send({ status: false, message: 'Error al eliminar el donador' });
        } else {
            res.status(200).send({ status: true, message: 'donador eliminado exitosamente' });
        }
    });
}

module.exports = {
    createDonor,
    listaAllDonors,
    listDonorById,
    updateDonor,
    deleteDonor
}