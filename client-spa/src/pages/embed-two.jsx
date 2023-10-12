import { useEffect, useState } from "react";

const EmbedTwo = () => {
  // TODO: use a legit UUID
  const [messageId, _setMessageId] = useState((Math.random() + 1).toString(36));

  const [accessToken, setAccessToken] = useState("");
  const [idToken, setIdToken] = useState("");

  const fetchTokenSubject = "com.instructure.get_token";

  const buildTokenRequest = () => ({
    subject: fetchTokenSubject,
    message_id: messageId,
  });

  const isInstructureOrigin = (_event) => {
    // TODO: Instead, use the (account service?) to determine
    // if a given origin is an Instructure origin.
    //
    // Cache results client-side with a reasonable TTL
    return true;
  };

  const isKnownRequest = (event) => event.data.message_id === messageId;

  useEffect(() => {
    // TODO: this should be the sso.instructure.com window
    // That window should forward the message to the correct window
    const embeddingApplication = window.parent;

    // TODO: Rather than 'localhost' this should be 'sso.instucture.com'
    embeddingApplication.postMessage(
      buildTokenRequest(),
      "http://localhost:3000"
    );

    // Register listener for token response
    window.addEventListener("message", (event) => {
      // Is the message from a trusted source?
      if (!isInstructureOrigin(event)) return;

      // Is the message in response to one we recognize?
      if (!isKnownRequest(event)) return;

      // Is the message one we can process
      if (event.data.subject !== `${fetchTokenSubject}.response`) return;

      setAccessToken(event.data.token);
      setIdToken(event.data.idToken);
    });
  }, []);

  return (
    <div style={{width: 600, overflow: 'hidden'}}>
      <h1>Another Embedded Application!</h1>

      <h2>ID Token</h2>
      <div>
        <p>
          Hey! I got an ID token from the application embedding me. I need to
          validate it and then can use it to initializer a user "session"
        </p>
        <code>{idToken}</code>
      </div>

      <h2>Access Token</h2>
      <div>
        <p>
          I also got an access token from the application embedding me. I can
          use it to make requests to my backend or any other backend in the
          Instructure platform.

          If the token expires I can request another from my embedding application via a `postMessage`
        </p>
        <code>{accessToken}</code>
      </div>
    </div>
  );
};

export default EmbedTwo;
