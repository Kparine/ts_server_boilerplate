import express from "express";

const app: express.Express = express();
const port: number = 3000;

app.listen(port, () => { console.log(`****---->>>> Listening on Port: ${port} <<<<----****`); });
