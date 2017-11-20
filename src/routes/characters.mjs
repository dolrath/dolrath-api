import express from 'express';

import { Character, Player, Race } from '../entities';
import { createCharacter } from '../infra/data/commands';
import { getCharacter } from '../infra/data/queries';

const router = express.Router();

export function characters() {
  router.get('/:name', async(req, res) => {
    const character = await getCharacter(req.params.name);

    res.json(character);
  });

  router.put('/:name', async(req, res) => {
    const player = new Player(req.body.player.email);
    const race = new Race(req.body.race.name);
    const character = new Character(req.params.name, race, player);

    const characterCreated = await createCharacter(character);

    res.json(characterCreated);
  });

  return router;
}
