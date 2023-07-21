import express, { Application } from "express"
import cors from "cors"

export const MainApp = (app: Application) => {
    app
      .use(cors())
      .use(express.json())
  
  };
  