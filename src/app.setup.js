import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import { createServer } from "http";


const app = express();
const server = createServer(app);

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use( express.urlencoded( { extended: true } ) );


export { app, server }