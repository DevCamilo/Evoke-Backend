'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Evocoins = Schema({
    index: Number,
    date: Date,
    data: Object,
    previousHash: String,
    hash: String,
    nonce: Number
}, { versionKey: false});

module.exports = mongoose.model('evocoins', Evocoins);

