'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Group = Schema({
    name: String,
    id_users: [{ type: Schema.ObjectId, ref: "users" }],
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, versionKey: false });

module.exports = mongoose.model('groups', Group);