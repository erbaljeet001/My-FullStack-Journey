import express from 'express'
import { addControl, delControl, getControl , editControl} from '../controller/controller.js';


const router = express.Router();

router.post('/add-student', addControl);
router.get('/get-students', getControl);
router.delete('/delete-student/:_id', delControl);
router.put("/update-student/:_id", editControl);

export default router;