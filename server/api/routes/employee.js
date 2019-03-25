const express = require('express')
const router = express.Router()

const EmployeeController = require('../controllers/employee')

// router.post(`/addOfficial`, PersonController.add_official)
// router.post(`/addStudent`, PersonController.add_student)
// router.post(`/addProfessor`, PersonController.add_professor)
// router.post(`/login`, PersonController.login)
router.get(`/all`, EmployeeController.get_employee_all)
// router.put(`/editPerson`, PersonController.edit_person)
// router.delete(`/deletePerson`, PersonController.delete_person)

module.exports = router