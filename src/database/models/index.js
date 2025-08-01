"use strict";
import fs from "fs";
import path from "path";
import Sequelize from "sequelize";
import process from "process";
import config from "../../lib/config.lib.js";
import { fileURLToPath } from "url";

const __filename = fileURLToPath( import.meta.url );
const __dirname = path.dirname( __filename );

const basename = path.basename(__filename);
const env = config.getEnvironment();
const db = {};

import { Sequelize } from 'sequelize';
import { getOrThrow } from '../../lib/config.lib.js';

const dbUrl = getOrThrow('DATABASE_URL');

const sequelize = new Sequelize(dbUrl, {
  dialect: 'postgres',
  logging: false,
});


db.sequelize = sequelize;
db.Sequelize = Sequelize;

const connectToDatabase = async () =>
{
  try {
    await sequelize.authenticate();
    await sequelize.sync( { alter: true } );
    console.log( "Connection has been established successfully." );
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    process.exit(1);
  }
};

export { db, connectToDatabase };