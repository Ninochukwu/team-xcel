"use strict";

import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  throw new Error('Missing DATABASE_URL in environment variables');
}


export const sequelize = new Sequelize(DATABASE_URL, {
  dialect: 'postgres',
  logging: false, 
});

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log(' Database connection established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

export const db = {
  sequelize,
};
