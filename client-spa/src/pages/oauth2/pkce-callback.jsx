import { useEffect, useRef, useState } from 'react'
import { createAuth0Client } from '@auth0/auth0-spa-js'

const PkceCallback = () => {
  const refreshButtonRef = useRef(null)

  const [refreshedToken, setRefreshedToken] = useState("")

  useEffect(() => {
    const requestAccessTokenAndUser = async () => {
      const auth0 = await createAuth0Client({
        domain: 'wdransfield-dev-test.us.auth0.com',
        clientId: 'DOLyiLftnXkHvRF9VWL9eNqUhKW8vE49',
        useRefreshTokens: true,
        authorizationParams: {
          redirect_uri: 'http://localhost:8000/oauth2/pkce-callback',
          audience: ['https://wdransfield-dev-test.us.poc-backend']
        }
      });

      const redirectResult = await auth0.handleRedirectCallback();
      
      refreshButtonRef.current?.addEventListener('click', async () => {
        console.log("Refreshing token...")
        const token = await auth0.getTokenSilently({cacheMode: 'off'});
        setRefreshedToken(token)
      })
    }

    requestAccessTokenAndUser()
  }, [])

  return <>
  <h1>PkceCallback</h1>
    <button ref={refreshButtonRef}>Refresh Token</button>
    <p>Refreshed Token: {refreshedToken}</p>
  </>
}

export default PkceCallback