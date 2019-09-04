'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Donation = Schema({
    id_campaing:  { type: Schema.ObjectId, ref: 'campaings' },
    id_donor:  { type: Schema.ObjectId, ref: 'donors' },
    donation: Number,
    status: { type: Boolean, default: true }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, versionKey: false });

module.exports = mongoose.model('donations', Donation);