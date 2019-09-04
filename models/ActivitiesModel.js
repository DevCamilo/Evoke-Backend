'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Activity = Schema({
    title_activity: String,
    description_activity: String,
    reward: Number,
    id_type_evidence: { type: Schema.ObjectId, ref: 'type_evidences' },
    status: { type: Boolean, default: true },
    id_mission: { type: Schema.ObjectId, ref: 'missions' }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, versionKey: false });

module.exports = mongoose.model('activities', Activity);