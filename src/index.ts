import bodyParser from "body-parser";
import express from "express";

const app: express.Express = express();
const port: number = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => { console.log(`****---->>>> Listening on Port: ${port} <<<<----****`); });