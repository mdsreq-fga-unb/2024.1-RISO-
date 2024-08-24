import express from 'express';
import unitUserController from '../controllers/unitUser.controller.js';

const unitUserRouter = express.Router()

unitUserRouter.get('/findAllUnitUser', unitUserController.findAllUnitUser);
unitUserRouter.post('/createUnitUser',unitUserController.createUnitUser);
unitUserRouter.get('/findByUserId/:UserId', unitUserController.findByUserIdUnitUser);
unitUserRouter.get('/findAllUsersByUnitId/:UnitId', unitUserController.findAllUsersByUnitIdUserUnit);
unitUserRouter.delete('/deleteUnitUser/:id',unitUserController.deleteUnitUser);

export default unitUserRouter;