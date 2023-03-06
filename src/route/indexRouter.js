import express from "express";
import {demoInsert,demoGet, demoGetByID, communicateWithServer} from '../controller/demoController.js'
const indexRouter = express.Router();

indexRouter.get('/list', demoGet)
indexRouter.get("/upload",demoInsert)
indexRouter.post('/insert', demoInsert)
indexRouter.get('/list/:id', demoGetByID)
indexRouter.post("/communicate",communicateWithServer);

export default indexRouter