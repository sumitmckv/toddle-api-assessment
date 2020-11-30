import { Router } from 'express';
import ImageController from '../controller/ImageController';

const imageRouter = Router();
const controller = new ImageController();

imageRouter.get('/resize', controller.resize);

export default imageRouter;
