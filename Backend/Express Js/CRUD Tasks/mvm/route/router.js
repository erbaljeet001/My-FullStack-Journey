import express from 'express'
import { addcontroller,getcontroller ,delcontroller,editcontroller} from '../controller/controller.js';
const router = express.Router();
router.post('/add', addcontroller);
router.get('/read', getcontroller);
router.delete('/del/:_id', delcontroller);
router.put('/edit/:_id', editcontroller);

export default router;