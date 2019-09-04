'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Donor = Schema({
    id_user: { type: Schema.ObjectId, ref: 'users' },
    description: String
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, versionKey: false });

module.exports = mongoose.model('donors', Donor);