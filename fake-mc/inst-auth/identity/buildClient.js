import { createAuth0Client } from "@auth0/auth0-spa-js";

const buildClient = async ({ domain, clientId, redirectUri }) => {
  const CACHE_LOCATION = "localstorage";

  return await createAuth0Client({
    domain,
    clientId,
    useRefreshTokens: true,
    cacheLocation: CACHE_LOCATION,
    authorizationParams: {
      redirect_uri: redirectUri,
      // This audience is an "API" in the Auth0 tenant
      audience: ["https://instructure-platform-apps.us.instructure.com"],
      clientId,
    },
  });
};

export default buildClient;
