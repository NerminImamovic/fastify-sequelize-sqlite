'use strict'

const fastify = require('fastify')
const Sequelize = require('sequelize');

const models = require('./models');
const City = models.City;

function build(opts={}) {
  const app = fastify(opts)
  app.get('/', async function (request, reply) {

    await City.sync();

    const cities = await City.findAll();

    console.log("Cities " + JSON.stringify(cities));

    return { cities }
  })

  return app
}

module.exports = build
