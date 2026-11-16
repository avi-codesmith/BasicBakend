import express from 'express';

import {
  getAllLaptops,
  getLaptopByID,
  addLaptop,
  updateProductByID,
  deleteProductByID,
} from '../controllers/laptopsControllers.js';

const router = express.Router();

router.route('/products').get(getAllLaptops); // read all
router.route('/products/:id').get(getLaptopByID); // read by ID
router.route('/addproducts').post(addLaptop); // add product
router.route('/updateproduct/:id').patch(updateProductByID); // update product
router.route('/deleteproduct/:id').delete(deleteProductByID); // delete product

export default router;
