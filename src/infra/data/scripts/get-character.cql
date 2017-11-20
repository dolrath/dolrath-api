MATCH
  (race:Race)<-[:IS]-(character:Character)
MATCH
  (player:Player)-[:PLAYS]->(character)
WHERE
  character.name = {name}

RETURN
  character.name as name,
  character.level as level,
  character.hitPointActual as hitPointActual,
  character.hitPointTotal as hitPointTotal,
  character.manaActual as manaActual,
  character.manaTotal as manaTotal,
  player.email as email,
  race.name as race,
  character.attrTotal as attrTotal,
  character.attrValuesDef as attrValuesDef,
  character.attrValuesDex as attrValuesDex,
  character.attrValuesInt as attrValuesInt,
  character.attrValuesSpd as attrValuesSpd,
  character.attrValuesStr as attrValuesStr,
  character.attrValuesVit as attrValuesVit;
