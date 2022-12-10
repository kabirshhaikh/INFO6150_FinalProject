import express from 'express';
import { createPassenger, getAllPassenger } from '../controllers/passenger-controllers.js';
import { verifyAdmin } from '../Utilities/verifyTokens.js';

const router = express.Router();

router.post('/', createPassenger );

router.get('/',verifyAdmin, getAllPassenger );

export default router;