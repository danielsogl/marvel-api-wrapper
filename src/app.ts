import { middleware, options } from 'apicache';
import compression from 'compression';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import redis from 'redis';

import * as apiController from './controllers/api';
import { ENVIRONMENT, REDIS_URL } from './util/secrets';

// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config({ path: '.env' });

// Create Express server
const app = express();

// Create cache object
const cache = middleware;

// Configure cache
options({
  statusCodes: {
    exclude: [401, 403, 405, 500],
    include: [200, 304]
  }
});

// Use Redis for Production builds
// If you want to use the default memory caching, uncomment this line
if (ENVIRONMENT === 'production') {
  options({
    redisClient: redis.createClient(REDIS_URL)
  });
}

// Express configuration
app.set('port', process.env.PORT || 8080);
// Use CORS
app.use(cors());
// Secure the API with helmet. Read more: https://expressjs.com/en/advanced/best-practice-security.html
app.use(helmet());
// only if you're behind a reverse proxy (Heroku, Bluemix, AWS if you use an ELB, custom Nginx setup, etc)
app.enable('trust proxy');
// Cache all date by one day
app.use(cache('1 day'));
// Compress results
app.use(compression());

// Routes
app.get('/', apiController.getInfo);
app.get('/:scope', apiController.getApi);
app.get('/:scope/:id', apiController.getApi);
app.get('/:scope/:id/:type', apiController.getApi);

// Export express app
export default app;
