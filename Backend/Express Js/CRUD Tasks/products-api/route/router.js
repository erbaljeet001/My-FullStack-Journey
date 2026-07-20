import express from 'express'
import { addProduct, delProduct, editProduct, getProduct } from '../controller/controller.js';
const router = express.Router();

router.post('/add-product', addProduct)
router.get('/get-product',getProduct)
router.delete('/del-product/:_id', delProduct);
router.put('/edit/:_id',editProduct)


export default router 