import "reflect-metadata";
import * as express from 'express';
import { createConnection, getRepository } from "typeorm";
import { Article } from './entity/Article';

const port:number = 8080;
const router = express.Router();

createConnection().then(async (connection) => {
  const app = express();

  app.get('/api' , async (req, res) => {
    res.json({hello: 'world'});
  });

  app.listen(port);
  console.log(`Listening on port ${port}`);

}).catch(error => console.log(error));
