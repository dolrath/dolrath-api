MATCH
  (player:Player)
WHERE
  player.email = {email}

MATCH
  (race: Race)
WHERE
  race.name = {race}

MERGE
  (character:Character {
    name: {name}
  })

SET
  character.level = {level},
  character.hitPointActual = {hitPointActual},
  character.hitPointTotal = {hitPointTotal},
  character.manaActual = {manaActual},
  character.manaTotal = {manaTotal},
  character.attrTotal = {attrTotal},
  character.attrValuesDef = {attrValuesDef},
  character.attrValuesDex = {attrValuesDex},
  character.attrValuesInt = {attrValuesInt},
  character.attrValuesSpd = {attrValuesSpd},
  character.attrValuesStr = {attrValuesStr},
  character.attrValuesVit = {attrValuesVit}

CREATE UNIQUE
  (player)-[:PLAYS]->(character)

CREATE UNIQUE
  (character)-[:IS]->(race);
