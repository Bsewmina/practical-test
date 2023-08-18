import mongoose from "mongoose";

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  empId: String,
  name: String,
  epfNum: Number,
  section: String,
  gender: Number,
  dob: Date,
});

// Compile model from schema
const Employee = mongoose.model("Employee", employeeSchema);

export { Employee }