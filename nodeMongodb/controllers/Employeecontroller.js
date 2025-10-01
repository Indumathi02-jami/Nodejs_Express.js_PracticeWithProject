const Employee = require('../models/Employee');

const createEmployee = async(req,res)=>{
    try{
        const{name,email,phone,city} = req.body

        const employee = new Employee ({
            name,
            email,
            phone,
            city

        })
        await employee.save();
        res.status(201).json(employee)
    }// ...existing code...
    catch(error){
    console.log("there is an error", error); // Log the error details
    res.status(500).json({message: 'Server error'})
}
// ...existing code...
}

const getEmployee = async(req,res)=>{
    try{
        const employees = await Employee.find()
        res.status(200).json(employees)
    }catch(err){
        console.log("there is an error: get method")
        res.status(500).json({message: "server error"})
    }
}

const singleEmployee = async(req,res)=>{
    try{
        const employee = await Employee.findById(req.params.id)

        if(!employee){
            return res.status(404).json({message: "Employee not found"})
        }
        res.status(200).json(employee)
    }catch(err){
        console.log("there is an error: get method")
        res.status(500).json({message: "server error"})
    }
    
}

const updateEmployee = async(req,res)=>{
    try{
        const {name,email,phone,city} = req.body
        const employee = await Employee.findByIdAndUpdate(
            req.params.id,
            {name,email,phone,city},
        )
        if(!employee){
            return res.status(404).json({message: "Employee not found"})
        }
        res.status(200).json(employee)
    }
    catch(err){
        console.log("there is an error: update method")
        res.status(500).json({message: "server error"})
    }
}

const deleteEmployee = async(req,res)=>{
    try{
        const deleteEmployee = await Employee.findByIdAndDelete(req.params.id)
        res.status(200).send()

    }catch(err){
        console.log("there is an error: delete method")
        res.status(500).json({message: "server error"})
    }
}

module.exports = {createEmployee, getEmployee, singleEmployee, updateEmployee, 
    deleteEmployee
}