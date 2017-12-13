MATCH
  (player:Player)
WHERE
  player.email = {email}
WITH
  player
MATCH
  (player)-[:PLAYS]->(character:Character)

DETACH DELETE character, player;
