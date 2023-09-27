import { useEffect, useRef } from 'react'
import { createAuth0Client } from '@auth0/auth0-spa-js'

const Index = () => {
  const loginButtonRef = useRef(null)

  useEffect(() => {
    const buildAuth0Client = async () => {
      const auth0 = await createAuth0Client({
        domain: 'wdransfield-dev-test.us.auth0.com',
        clientId: 'DOLyiLftnXkHvRF9VWL9eNqUhKW8vE49',
        useRefreshTokens: true,
        authorizationParams: {
          redirect_uri: 'http://localhost:8000/oauth2/pkce-callback',
          // This audience is an "API" in the Auth0 tenant
          audience: ['https://wdransfield-dev-test.us.poc-backend'],
        }
      });

      loginButtonRef.current?.addEventListener('click', async () => {
        console.log("Logging in...")
        await auth0.loginWithRedirect();
      });
    }

    buildAuth0Client()
  }, [])

  return(
    <>
      <button ref={loginButtonRef}>Login</button>
    </>
  )
}

export default Index