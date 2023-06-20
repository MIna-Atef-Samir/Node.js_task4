import { Router } from "express";
import {validate} from "./validation.js"
import {productsHandler, singleProduct, addProduct, updateProduct, deleteProduct} from "./eventHandler.js"
export const router = Router()

router.get('/', productsHandler);
router.get('/:productId', singleProduct);
router.post('/add-new-product', validate, addProduct);
router.patch('/:productId', validate, updateProduct);
router.delete('/:productId', deleteProduct)



