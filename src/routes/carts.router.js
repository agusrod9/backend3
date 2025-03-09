import { Router } from 'express';
import { readAllCarts, readCartById, createEmptyCart, addProductToCartById, deleteCartById } from '../controllers/carts.controller.js';


const router = Router();

router.get('/' ,  readAllCarts)
router.get('/:cid', readCartById);
router.post('/', createEmptyCart);
router.put('/:cid', addProductToCartById);
router.delete('/:cid', deleteCartById);

export default router;