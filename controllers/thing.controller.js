const { Thing } = require('./../models');

module.exports.createThing = async (req, res, next) => {
  try {
    const { body } = req;
    const newThing = await Thing.create(body);
    if (!newThing) {
      return res.status(400).send('bad request');
    }
    return res.status(201).send(newThing);
  } catch (error) {
    next(error);
  }
};

module.exports.findAllThing = async (req, res, next) => {
  try {
    const things = await Thing.findAll();
    if (things.length === 0) {
      return res.status(204).send('empty');
    }
    return res.status(200).send(things);
  } catch (error) {
    next(error);
  }
};

module.exports.updateThing = async (req, res, next) => {
  try {
    const {
      params: { idThing },
      body,
    } = req;
    const thingUpdated = await Thing.updateByPk(idThing, body);
    if (!thingUpdated) {
      return res.status(400).send('bad request');
    }
    return res.status(200).send(thingUpdated);
  } catch (error) {
    next(error);
  }
};

module.exports.deleteThing = async (req, res, next) => {
  try {
    const {
      params: { idThing },
    } = req;
    const deletingThing = await Thing.deleteByPk(idThing);
    if (!deletingThing) {
      return res.status(400).send('bad request');
    }
    return res.status(200).send(deletingThing);
  } catch (error) {
    next(error);
  }
};
