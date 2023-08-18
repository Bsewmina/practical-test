import express, { json } from "express";
import mongoose from "mongoose";
import { EmployeeRoute } from "./routes/EmployeeRoute";

const app = express();
const cors = require ('cors');


app.use(cors());
app.use(express.json());



const start = async () => {
    try {
      await mongoose.connect('mongodb+srv://bsewmina:Password001@cluster0.j4lsqis.mongodb.net/');
      console.log('Connected to the MongoDB server');
    } catch (err) {
      console.log(err);
    }

    app.use('/api/v1/employee/', EmployeeRoute);
  
    app.listen(3006, () => {
      console.log('Server is running on port 3006');
    });
  };

  start()