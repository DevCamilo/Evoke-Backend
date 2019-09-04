'use strict'
// Paquetes requeridos
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const DB = require('./config/DB');


const UserRoutes = require('./routes/UsersRouter');
const CampaingRoutes = require('./routes/CampaingRouter');
const TypeEvidenceRoutes = require('./routes/TypeEvidenceRouter');
const MissionRoutes = require('./routes/MissionRouter');
const ActivitiesRoutes = require('./routes/ActivitiesRouter');
const GroupsRoutes = require('./routes/GroupsRoutes');
const CalificationRoutes = require('./routes/CalificationRoutes');
const DonorRoutes = require('./routes/DonorRoutes');
const DonationRoutes = require('./routes/DonationRouter');

mongoose.connect(`mongodb://${DB.host}:${DB.port}/${DB.database}`, { useNewUrlParser: true }, (err, con) => {
    if (err) {
        console.log('Error en la conexion');
        console.log(err);
    } else {
        console.log('Conexion DB Exitosa');
    }
});

app.use(bodyParser.json());

app.use(cors());

app.use(UserRoutes);
app.use(CampaingRoutes);
app.use(TypeEvidenceRoutes);
app.use(MissionRoutes);
app.use(ActivitiesRoutes);
app.use(GroupsRoutes);
app.use(CalificationRoutes);
app.use(DonorRoutes);
app.use(DonationRoutes);

app.listen(process.env.PORT || 3000, () => {
    console.log("Server Corriendo");
});


