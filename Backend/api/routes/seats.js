import express from 'express';

import {verifyAdmin} from '../Utilities/verifyTokens.js'
import { createSeats, getFlightSeats, updateFlightSeats } from '../controllers/seats-controller.js';

const router = express.Router();

router.post('/:flightid', verifyAdmin ,createSeats );

router.get('/:id', getFlightSeats );

router.put('/availability/:id', updateFlightSeats );

export default router;
