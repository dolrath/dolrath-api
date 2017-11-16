import neo4j from 'neo4j-driver';
import config from 'config';

const username = config.get('neo4j.username');
const password = config.get('neo4j.password');
const authBasic = neo4j.v1.auth.basic(username, password);

const host = config.get('neo4j.endpoint');

const options = {
  trust: "TRUST_ALL_CERTIFICATES",
  encrypted: "ENCRYPTION_NON_LOCAL",
};

export async function database(command) {
  const driver = neo4j.v1.driver(host, authBasic, options);
  const session = driver.session();

  const data = await command(session);

  session.close();
  driver.close();

  return data;
}
