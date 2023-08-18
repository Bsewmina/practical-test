import express from "express";
import { Request, Response } from 'express';
import { Employee } from "../model/Employee";

const router = express.Router();


router.get('/', async (req: Request, res: Response) => {
    const employee = await Employee.find();
    res.send(employee);
    
});

router.post('/', async (req: Request, res: Response) => {

    let isAvailble = await Employee.findOne({ empId: req.body.empId})

    if (isAvailble){
        res.status(400).send('Employee already exists');
    }
    else{
        const employee = new Employee({
            empId: req.body.empId,
            name: req.body.name,
            epfNum: req.body.epfNum,
            section: req.body.section,
            gender: req.body.gender,
            dob: req.body.dob,
        })
    
        try {
    
            await employee.save();
            
        } catch (err) {
            console.log(err);
            res.status(400).send('Something went wrong');
        }
    
        res.status(201).send('Successsully added')
    }
    
});

router.put('/update/', async (req: Request, res: Response) => {

    let employee = await Employee.findOne({ empId: req.body.empId})

    if (!employee){
        res.status(400).send('Employee cannot be found to update');
    }
    else{
        employee.set({
            empId: req.body.empId,
            name: req.body.name,
            epfNum: req.body.epfNum,
            section: req.body.section,
            gender: req.body.gender,
            dob: req.body.dob,
        })
    
        try {
    
            await employee.save();
            
        } catch (err) {
            console.log(err);
            res.status(400).send('Something went wrong');
        }
    
        res.status(201).send('Successsully Updated');
    }
    
});

router.delete('/delete/:empId', async (req: Request, res: Response) => {
    const employee = await Employee.findOne({ empId: req.params.empId})

    if (!employee){
        res.status(400).send('Employee does not exist');
    }
    else{

        try {
            await employee.deleteOne({ empId: req.params.empId })
        } catch (err) {
            console.log(err);
            res.status(400).send('Something went wrong');
        }
        
        res.status(200).send('Successfully Deleted');
        

    }
    
});


export { router as EmployeeRoute } ;