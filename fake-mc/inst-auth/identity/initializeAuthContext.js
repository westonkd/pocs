const initializeAuthContext = async ({
  client,
  setCurrentUser,
}) => {
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get("code");

  let user = await client.getUser();

  /**
   * Received authentication callback request form Identity Service
   * and now need to exchange the code for a token. The client uses
   * the the authorization code with PKCE, so no secret is exposed
   * in the client.
   */
  if (code && !user?.sub) {
    await client.handleRedirectCallback();
    user = await client.getUser();
  }

  setCurrentUser(user || {});

  /**
   * The user is not logged in. Make an authentication request to
   * Identity Service.
   *
   * TODO:
   * - In some cases a popup may be desirable rather than a redirect.
   *   Add support for this option.
   */
  if (!user && !code) {
    client.loginWithRedirect();
  }

  console.info(`Identity Service user is: ${JSON.stringify(user)}`);
};

export default initializeAuthContext;
