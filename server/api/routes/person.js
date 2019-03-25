const express = require('express')
const router = express.Router()

const PersonController = require('../controllers/person')

// router.post(`/addStudent`, )
// router.post(`/addProfessor`, )
router.post(`/addOfficial`, PersonController.add_official)
router.post(`/addStudent`, PersonController.add_student)
router.post(`/addProfessor`, PersonController.add_professor)
router.post(`/login`, PersonController.login)
router.get(`/getPerson`, PersonController.get_person)
router.put(`/editPerson`, PersonController.edit_person)
router.delete(`/deletePerson`, PersonController.delete_person)

module.exports = router