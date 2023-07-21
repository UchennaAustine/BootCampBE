import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const URL: string = process.env.MONGO_DB!;

export const DB = () => {
  try {
    mongoose.connect(URL).then(() => {
      console.log("");
      console.log("connected 🚀🚀🚀");
    });
  } catch (error) {
    console.log(error);
  }
};
