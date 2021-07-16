import express from 'express';
import config from './config';
import Logger from './loaders/logger';

// Constants
// get the config fixed
const PORT = 8080;

async function startServer() {
  const app = express();

  await require('./loaders').default({ expressApp: app });
  app.listen(PORT, () => {
    Logger.info(`
      ################################################
           == Server listening on port: ${PORT} ==
      ################################################
    `);
  }).on('error', (err) => {
    Logger.error(err);
    process.exit(1);
  });
}

startServer();
