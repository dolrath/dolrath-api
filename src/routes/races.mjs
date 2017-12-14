import express from 'express';

import { getRaces } from '../infra/data/queries';

const router = express.Router();

export function races() {
  router.get('/', async(req, res) => {
    const races = await getRaces();

    res.json(races);
  });

  return router;
}
