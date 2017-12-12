MATCH
  (player:Player)
OPTIONAL MATCH
  (player)-[:PLAYS]->(character:Character)
WHERE
  player.email = {email}

DETACH DELETE character, player;
