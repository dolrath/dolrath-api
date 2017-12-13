import express from 'express';

import { Player } from '../entities';
import { createPlayer, deletePlayer } from '../infra/data/commands';
import { getPlayer, getPlayers } from '../infra/data/queries';

const router = express.Router();

export function players() {
  router.get('/', async(req, res) => {
    const players = await getPlayers();

    res.json(players);
  });

  router.get('/:email', async(req, res) => {
    const player = await getPlayer(req.params.email);

    res.json(player);
  });

  router.delete('/:email', async(req, res) => {
    await deletePlayer(req.params.email);

    res.sendStatus(204);
  });

  router.put('/:email', async(req, res) => {
    const player = new Player(req.params.email);

    const playerCreated = await createPlayer(player);

    res.json(playerCreated);
  });

  return router;
}
