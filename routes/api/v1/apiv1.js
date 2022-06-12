import express from 'express';
var router = express.Router();

import shoeRouter from './controllers/shoe.js';

router.use('/shoe', shoeRouter);

export default router;