import express, { urlencoded } from "express";
import {PORT} from './config/env.js';

import authRouter from "./routes/auth.routes.js";
import subscriptionRouter from "./routes/subscription.route.js";
import userRouter from "./routes/user.routes.js";
import connnectToDatabase from "./database/mongodb.js";
import errorMiddleware from "./Middleware/error.middleware.js";
import cookieParser from "cookie-parser";
import arcjetMiddleware from "./Middleware/arcjet.middleware.js";
import workflowRouter from "./routes/workflow.routes.js";

const app = express();

app.use(express.json());
app.use(urlencoded({extended:true}));
app.use(cookieParser())
app.use(arcjetMiddleware)

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);
app.use('/api/v1/workflows',workflowRouter);

app.use(errorMiddleware)

app.get("/", (req,res) => {
    res.send("welcome to the Subscription Tracking Api");
})

app.listen(PORT,async ()=>{
    console.log(`http://localhost:${PORT}`);
    await connnectToDatabase();
})

export default app;
