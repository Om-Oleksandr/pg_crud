const fs = require('fs');
const path = require('path');
const { Client } = require('pg');
const config = require('./../configs/db.json');

const dbConfig = config[process.env.NODE_ENV || 'development'];

const client = new Client(dbConfig);

const db = {
  client,
};


client.connect();
process.on('beforeExit', () => client.end());

const baseName = path.basename(__filename);
fs.readdirSync(__dirname)
  .filter((fileName) => /\.js$/.test(fileName) && fileName !== baseName)
  .forEach((fileName) => {
    const absPathToFile = path.resolve(__dirname, fileName);
    const Model = require(absPathToFile);
    Model.client = client;
    db[Model.name] = Model;
  });

module.exports = db;
