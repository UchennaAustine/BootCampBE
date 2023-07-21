import express, { Application } from "express";
import { DB} from "./config/DB";
import { MainApp } from "./MainApp";

const prototype = process.env.Port!
const Port:number =  parseInt(prototype)

const app:Application = express()

MainApp(app)

const server = app.listen(Port, ()=>{
    DB()
console.log(`Server is All Right`);

})

process.on("uncaughtException", (error: Error) => {
    console.log("Shutting down server because of uncaughtException Error");
    console.log(error);
  
    process.exit(1);
  });

  process.on("unhandledRejection", (reason: any) => {
    console.log("Shutting down server because of unhandledRejection Error");
    console.log(reason);
  
    server.close(() => {
      process.exit(1);
    });
  });