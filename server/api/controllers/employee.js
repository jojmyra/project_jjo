const mongoose = require('mongoose')
const Employee = require('../models/employee.model')

exports.get_employee_all = (req, res) => {
    Employee.find().then((result) => {
        res.json(result)
    }).catch((err) => {
        res.status(401).json({
            success: false,
            err
        })
    });
}