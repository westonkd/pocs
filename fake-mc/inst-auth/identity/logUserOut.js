import buildClient from "./buildClient";

const logUserOut = async (client, setCurrentUser) => {
  console.log(client, setCurrentUser)

  // TODO: Identify correct parameter for federated logout :)
  await client.logout({logoutParams: {federated: true}, federated: true});
  setCurrentUser({});
};

export default logUserOut;
