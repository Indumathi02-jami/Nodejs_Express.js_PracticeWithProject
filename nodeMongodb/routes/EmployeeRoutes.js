const express = require('express');
const router = express.Router();
const employeecontroller = require('../controllers/Employeecontroller');
const Employee = require('../models/Employee');

router.post('/add-emp', employeecontroller.createEmployee);
router.get('/get-emp',employeecontroller.getEmployee)
router.get('/get-emp/:id',employeecontroller.singleEmployee)
router.put('/update-emp/:id',employeecontroller.updateEmployee)
router.delete('/delete-emp/:id',employeecontroller.deleteEmployee)

module.exports = router;