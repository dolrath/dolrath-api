import neo4j from 'neo4j-driver';

const username = process.env.NEO4J_USERNAME;
const password = process.env.NEO4J_PASSWORD;
const authBasic = neo4j.v1.auth.basic(username, password);

const host = process.env.NEO4J_ENDPOINT;

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
