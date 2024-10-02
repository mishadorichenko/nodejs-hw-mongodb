import { TEMP_UPLOAD_DIR, UPLOAD_DIR } from './constants/index.js';
import { initMongoConnection } from './db/initMongoConnection.js';
import { setupServer } from './server.js';

import createDirIfNotExists from './utils/createDirIfNotExists.js';

const bootstrap = async () => {
  await initMongoConnection();
  setupServer();
  //Check are there folders exists if not create new
  await createDirIfNotExists(TEMP_UPLOAD_DIR);
  await createDirIfNotExists(UPLOAD_DIR);
};

bootstrap();
