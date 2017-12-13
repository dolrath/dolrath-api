MATCH
  (player:Player)
WHERE
  player.email = {email}

RETURN
  player.email as email;
