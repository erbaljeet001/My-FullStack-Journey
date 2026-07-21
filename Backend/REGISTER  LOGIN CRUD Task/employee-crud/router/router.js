import express from 'express'
import { addEmployee, delEmployee, editEmployee, getEmployee } from '../controller/contoller.js';
const router = express.Router();

router.post('/add-employee', addEmployee);
router.get('/get-employees', getEmployee);
router.delete('/delete-employee/:_id', delEmployee);
router.put('/update-employee/:_id', editEmployee)
export default router;