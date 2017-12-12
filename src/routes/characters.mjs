import express from 'express';

import { Character, Player, Race } from '../entities';
import { createCharacter, deleteCharacter } from '../infra/data/commands';
import { getCharacter, getCharacters } from '../infra/data/queries';

const router = express.Router();

export function characters() {
  router.get('/players/:email/characters', async(req, res) => {
    const character = await getCharacters(req.params.email);

    res.json(character);
  });

  router.get('/characters/:name', async(req, res) => {
    const character = await getCharacter(req.params.name);

    res.json(character);
  });

  router.delete('/characters/:name', async(req, res) => {
    await deleteCharacter(req.params.name);

    res.sendStatus(204);
  });

  router.put('/characters/:name', async(req, res) => {
    const player = new Player(req.body.player.email);
    const race = new Race(req.body.race.name);
    const character = new Character(req.params.name, race, player);

    const characterCreated = await createCharacter(character);

    res.json(characterCreated);
  });

  return router;
}
