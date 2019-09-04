'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TypeUser = Schema({
    name: String,
    description: String,
    status: { type: Boolean, default: true }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, versionKey: false });

module.exports = mongoose.model('type_users', TypeUser);
