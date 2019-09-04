'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Calification = Schema({
    id_group: { type: Schema.ObjectId, ref: 'groups' },
    id_activity: { type: Schema.ObjectId, ref: 'activities' },
    evidence: String,
    status: { type: Boolean, default: true },
    observations: String,
    calification: Number
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, versionKey: false });

module.exports = mongoose.model('califications', Calification);