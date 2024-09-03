// import dotenv from 'dotenv'; === import "dotenv/config";
import 'dotenv/config';

export const env = (name, defaultValue) => {
  const value = process.env[name];

  //   if (!value && !defaultValue) throw new Error(`Missing process.env[${name}]`);
  //   return value || defaultValue;

  if (value) return value;

  if (defaultValue) return defaultValue;

  throw new Error(`Missing process.env[${name}]`);
};
