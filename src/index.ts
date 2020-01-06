import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import { userRouter } from "./routes/user";

const app: express.Express = express();
const port: number = 3000;

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/user", userRouter);

app.listen(port, () => {
    console.log(`****---->>>> Listening on Port: ${port} <<<<----****`);
});
