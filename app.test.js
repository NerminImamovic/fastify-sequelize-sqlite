'use strict'

const { test } = require('tap');
const build = require('./app');

const models = require('./models');

const City = models.City;

City.sync().then(async () => {
    City.create({
        name: 'Jablanica',
    });
    City.create({
        name: 'Stockholm',
    });
});

test('requests the "/" route', async t => {
  const app = build();

  const response = await app.inject({
    method: 'GET',
    url: '/'
  });

  const responseBody = JSON.parse(response.body);

  t.equal(response.statusCode, 200, 'returns a status code of 200');
  t.equal(responseBody.cities.length, 2);
});
