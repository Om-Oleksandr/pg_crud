const express = require('express');
const ThingController = require('./controllers/thing.controller');

const app = express();

app.use(express.json());

// app.post('/things', ThingController.createThing);
// app.get('/things', ThingController.findAllThing);

app.route('/things').post(ThingController.createThing).get(ThingController.findAllThing);

app.route('/things/:idThing').put(ThingController.updateThing).delete(ThingController.deleteThing)
// .get(ThingController.findThing)
// .delete(ThingController.deleteThing);

module.exports = app;
