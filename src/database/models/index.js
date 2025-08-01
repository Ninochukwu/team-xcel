"use strict";
import path from "path";
import Sequelize from "sequelize";
import process from "process";
import {config} from "../../lib/config.lib.js";
import { fileURLToPath } from "url";
import dotenv from 'dotenv';
dotenv.config();



const dotenv = config.getEnvironment();
const db = {};

import {getOrThrow}  from '../../lib/config.lib.js'; 

const DATABASE_URL = getOrThrow('DATABASE_URL'); 

const sequelize = new Sequelize(DATABASE_URL, {
  dialect: 'postgres',
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

