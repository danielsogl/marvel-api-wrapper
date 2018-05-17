import dotenv from 'dotenv';
import fs from 'fs';

import logger from './logger';

if (fs.existsSync('.env')) {
  logger.debug('Using .env file to supply config environment variables');
  dotenv.config({ path: '.env' });
}

export const ENVIRONMENT = process.env.NODE_ENV;
const prod = ENVIRONMENT === 'production'; // Anything else is treated as 'dev'

export const PUBLIC_KEY = process.env['PUBLIC_KEY'];
export const PRIVATE_KEY = process.env['PRIVATE_KEY'];
export const REDIS_URL = process.env['REDIS_URL'];

if (!PUBLIC_KEY) {
  logger.error('No public api key. Set PUBLIC_KEY environment variable.');
  process.exit(1);
}

if (!PRIVATE_KEY) {
  logger.error('No private api key. Set PRIVATE_KEY environment variable.');
  process.exit(1);
}
