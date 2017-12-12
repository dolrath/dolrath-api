MATCH
  (character:Character)
WHERE
  character.name = {name}

DETACH DELETE character;
