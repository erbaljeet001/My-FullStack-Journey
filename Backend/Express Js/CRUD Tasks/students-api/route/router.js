import express from 'express'

import {addControl, getControl} from '../controller/controller.js'
const router = express.Router();

router.post('/add', addControl);

router.get('/get-students',getControl)

export default router;


