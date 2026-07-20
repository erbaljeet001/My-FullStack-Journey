import express from 'express'
import {addControl, getControl, delControl,putControl} from '../controller/controller.js'
const router = express.Router();
router.post('/add', addControl);
router.get('/get', getControl);
router.delete('/del/:_id', delControl);
router.put('/update/:_id', putControl);

export default router;

