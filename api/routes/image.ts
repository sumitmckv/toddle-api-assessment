import { Router } from 'express';
import ImageController from '../controller/ImageController';
import validate from '../../auth';

const imageRouter = Router();
const controller = new ImageController();

imageRouter.get('/resize', validate, controller.resize);

export default imageRouter;
