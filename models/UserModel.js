'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = Schema({
    id_type_user: { type: Schema.ObjectId, ref: 'type_users' },
    name: String,
    last_name: String,
    country: String,
    city: String,
    //campaing: [{ type: Schema.ObjectId, ref: 'campaing' }],
    status: { type: Boolean, default: true },
    donor: { type: Boolean, default: false },
    telephone: String,
    email: String,
    password: String
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, versionKey: false });

module.exports = mongoose.model('users', User);
