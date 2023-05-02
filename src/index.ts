import express, {Application} from "express";
import bodyParser from "body-parser";
import compression from "compression";
import cors from "cors";
import { config as dotenv } from "dotenv";
import { CronJob } from 'cron';
import { ClearTodo } from "./schedule/ClearTodo";

//routers
import IndexRoutes from "./routers/IndexRoutes";

class App {
    public app: Application;

    constructor(){
        this.app = express();
        this.plugins();
        this.routes();
        dotenv();
        this.clearTodo();
    }

    protected plugins(): void{
        this.app.use(bodyParser.json());
        this.app.use(compression());
        this.app.use(cors());
    }

    protected routes(): void{       
        this.app.use("/", IndexRoutes);
    }

    protected clearTodo(): void{
        const scheduleClearTodo = new CronJob("0 */2 * * *", ClearTodo);
        scheduleClearTodo.start();
    }
}

const port: number = 8000;
const app = new App().app;
app.listen(port, ()=>{
    console.log(`hello Ts Running at port ${port}`)
})
