'use strict'

const CalificationModel = require('../models/CalificationModel');
const moment = require('moment');

function createCalification(req, res) {
    CalificationModel.create(req.body, (err, data) => {
        if (err) {
            res.status(200).send({ status: false, message: "Fallo al guartar la calificación" });
        } else {
            res.status(200).send({ status: true, message: "calificacións guardada exitosamente" });
        }
    });
}

function listaAllCalification(req, res) {
    CalificationModel.find({ status: true }, (err, data) => {
        if (err) {
            res.status(200).send({ status: false, message: "Fallo al listar las calificiones" });
        } else {
            res.status(200).send({ status: true, data: data });
        }
    });
}

function listCalificationById(req, res){
    CalificationModel.findById(req.query, (err, data) => {
        if(err){
            res.status(200).send({ status: false, message: "Fallo al listar la calificación" });
        } else {
            res.status(200).send({ status: true, data: data });
        }
    });
}

function updateCalification(req, res) {
    let update = req.body;
    update.updated_at = new Date(moment().toISOString());
    CalificationModel.findByIdAndUpdate(update.id, update, (err, data) => {
        if (err) {
            res.status(200).send({ status: false, message: "Fallo al actualizar la calificaion" });
        } else {
            res.status(200).send({ status: true, message: "calificación actualizadoo exitosamente" });
        }
    });
}

function deleteCalification(req, res){
    const query = req.query;
    CalificationModel.findByIdAndUpdate(query.id, {
        status: false,
        updated_at: new Date(moment().toISOString())
    }, (err, data) => {
        if (err) {
            res.status(200).send({ status: false, message: 'Error al eliminar la calificaion' });
        } else {
            res.status(200).send({ status: true, message: 'Calificacion eliminado exitosamente' });
        }
    });
}

module.exports = {
    createCalification,
    listaAllCalification,
    listCalificationById, 
    updateCalification,
    deleteCalification
}