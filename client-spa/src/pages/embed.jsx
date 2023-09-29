import { useEffect, useState } from "react";

const Embed = () => {
  // TODO: use a legit UUID
  const [messageId, _setMessageId] = useState((Math.random() + 1).toString(36));

  const fetchTokenSubject = "com.instructure.get_token";

  const buildTokenRequest = () => ({
    subject: fetchTokenSubject,
    message_id: messageId
  });

  const isInstructureOrigin = (_event) => {
    // TODO: Instead, use the (account service?) to determine
    // if a given origin is an Instructure origin.
    //
    // Cache results client-side with a reasonable TTL
    return true
  }

  const isKnownRequest = (event) => event.data.message_id === messageId

  useEffect(() => {
    // TODO: this should be the sso.instructure.com window
    // That window should forward the message to the correct window
    const embeddingApplication = window.parent;

    // TODO: Rather than 'localhost' this should be 'sso.instucture.com'
    embeddingApplication.postMessage(buildTokenRequest(), "http://localhost:3000");

    // Register listener for token response
    window.addEventListener('message', (event) => {
      // Is the message from a trusted source?
      if (!isInstructureOrigin(event)) return

      // Is the message in response to one we recognize?
      if (!isKnownRequest(event)) return

      // Is the message one we can process
      if (event.data.subject !== `${fetchTokenSubject}.response`) return

      console.log("Got a token!", event)
    })
  }, []);

  return <>embed</>;
};

export default Embed;
