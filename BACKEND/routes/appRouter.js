import express from 'express';

import {
  getAllLaptops,
  getLaptopByID,
  addLaptop,
} from '../controllers/laptopsControllers.js';

const router = express.Router();

router.route('/products').get(getAllLaptops);
router.route('/products/:id').get(getLaptopByID);
router.route('/addproducts').post(addLaptop);

export default router;
