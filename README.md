# Fastify Sequelize SQLITE

## Description

Usage of Fastify with Sqlite (database and memory store) for development and testing using Sequelize. 

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Questions](#questions)

## Installation
1. Fork repository
2. Clone repository to the local environment
3. Run `npm install` to install dependencies 

## Usage

### Development 

For development we are using sqlite file `database.sqlite3`, where we can store simplest data in sql schema. (We can use Postgres, MySQL, MariaDB, MsSql for persistant storage in development mode.)

1. Run migrations

`npm run migrate` - It will generate `database.sqlite3` file if we don't have it.

2. Seed database 

`npm run seed` - It will seed our database with the data.

3. Start the application

`npm run start` - Run application on PORT 3000 


### Test

1. Run tests

`npm run test` - run tests with data placed in `memory` store.

### Note 

In `app.js` we are using `.sync()` method to sync all data contained in database or `memory` store.
