'use strict'

const DonationModel = require('../models/DonationModel');
const moment = require('moment');

function createDonation(req, res) {
    DonationModel.create(req.body, (err, data) => {
        if (err) {
            res.status(200).send({ status: false, message: "Fallo al guartar el donacion" });
        } else {
            res.status(200).send({ status: true, message: "donaciones guardado exitosamente" });
        }
    });
}

function listaAllDonations(req, res) {
    DonationModel.find({ status: true }, (err, data) => {
        if (err) {
            res.status(200).send({ status: false, message: "Fallo al listar las donaciones" });
        } else {
            res.status(200).send({ status: true, data: data });
        }
    });
}

function listDonationById(req, res){
    DonationModel.findById(req.query, (err, data) => {
        if(err){
            res.status(200).send({ status: false, message: "Fallo al listar la donacion" });
        } else {
            res.status(200).send({ status: true, data: data });
        }
    });
}

function updateDonation(req, res) {
    let update = req.body;
    update.updated_at = new Date(moment().toISOString());
    DonationModel.findByIdAndUpdate(update.id, update, (err, data) => {
        if (err) {
            res.status(200).send({ status: false, message: "Fallo al actualizar la donacion" });
        } else {
            res.status(200).send({ status: true, message: "donacion actualizadoo exitosamente" });
        }
    });
}

function deleteDonation(req, res){
    const query = req.query;
    DonationModel.findByIdAndUpdate(query.id, {
        status: false,
        updated_at: new Date(moment().toISOString())
    }, (err, data) => {
        if (err) {
            res.status(200).send({ status: false, message: 'Error al eliminar la donacion' });
        } else {
            res.status(200).send({ status: true, message: 'Donacion eliminado exitosamente' });
        }
    });
}

module.exports = {
    createDonation,
    listaAllDonations,
    listDonationById,
    updateDonation,
    deleteDonation
}