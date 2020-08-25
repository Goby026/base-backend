import { Router } from 'express';

import auth from './auth';

import user from './user';

// import perito from './perito';

// import procedencia from './procedencia';

// import cita from './cita';

const routes = Router();

routes.use('/auth', auth);

routes.use('/users', user);

// routes.use('/peritos', perito);

// routes.use('/procedencias', procedencia);

// routes.use('/cita', cita);

export default routes;