import {Router} from 'express';
import {authorize}  from "../Middleware/auth.middleware.js";
import { createSubscription, getUserSubscriptions } from '../controllers/subscription.controller.js';
const subscriptionRouter  = Router();


subscriptionRouter.post('/', authorize,createSubscription)
subscriptionRouter.get('/user/:id', authorize,getUserSubscriptions)


export default subscriptionRouter;
 