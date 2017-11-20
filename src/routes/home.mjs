import express from 'express';
import pkg from '../../package.json';

const router = express.Router();

export function home() {
  router.get('/', (req, res) => res.json({
    name: pkg.name,
    version: pkg.version,
    message: 'I\'m working...',
  }));

  return router;
}
