import dotenv from 'dotenv';
dotenv.config();

export const config = {
  databaseUrl: process.env.DATABASE_URL,
  port: process.env.PORT || 3000,

  get(key) {
    return this[key];
  },

  getOrThrow(key) {
    const value = this[key];
    if (!value) { 
      throw new Error(`Missing required configuration: ${key}`);
    }
    return value;
  },
  getEnvironment() {
    return process.env.NODE_ENV || 'development';
}
}


export function getOrThrow(key) {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
}
