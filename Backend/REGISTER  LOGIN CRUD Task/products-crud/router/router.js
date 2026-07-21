import express from "express";
import { addProduct , delProduct, editProduct, getProduct} from "../controller/controller.js";

const router = express.Router();

router.post('/add-product', addProduct);
router.get('/get-products', getProduct);
router.delete('/delete-product/:_id', delProduct);
router.put('/update-product/:_id', editProduct);

export default router;