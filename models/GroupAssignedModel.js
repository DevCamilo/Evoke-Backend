'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GroupAssigned = Schema({
    id_campaing: { type: Schema.ObjectId, ref: "campaings" },
    id_group: { type: Schema.ObjectId, ref: "groups" },
    description: String,
    status: { type: Boolean, default: true }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, versionKey: false });

module.exports = mongoose.model('group_assigneds', GroupAssigned);