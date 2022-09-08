import express from 'express';
var router = express.Router();

import shoeRouter from './controllers/shoe.js';
import poopRouter from './controllers/poop.js';

router.use('/shoe', shoeRouter);
router.use('/poop', poopRouter);

export default router;