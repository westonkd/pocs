import React, { useEffect, useState } from "react";
import ChakraApp from "../ChakraApp";
import UserProfile from "./sidebar/UserProfile";
import FavoritePages from "./sidebar/FavoritePages";
import Applications from "./sidebar/Applications";

import { Flex, Box, Text } from "@chakra-ui/react";
import { buildClient, initializeAuthContext } from "inst-auth";

const Profile = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [client, setClient] = useState();

  useEffect(() => {
    const init = async () => {
      const newClient = await buildClient({
        domain: "instructure-poc.cic-demo-platform.auth0app.com",
        clientId: "MWnEMNzYwrRMWTj9WD29E55ogz96hbX6",
        redirectUri: "https://instructure.ngrok.dev/profile",
      });

      setClient(newClient);

      await initializeAuthContext({
        client: newClient,
        setCurrentUser,
      });
    };

    init();
  }, []);

  return (
    <ChakraApp>
      <Flex color="#444344">
        <Box bg="#f1eef3" width="400px" height="100vh">
          <UserProfile
            user={{
              name: currentUser.name,
              profile: currentUser.picture,
            }}
            // TODO: Make organization content dynamic
            organization={{ name: "Hogwarts" }}
            authClient={client}
            setCurrentUser
          />
          <FavoritePages />
          <Applications />
        </Box>
        <Box flex="1" bg="white" height="100vh" boxShadow="md">
          <Text>Box 3</Text>
        </Box>
      </Flex>
    </ChakraApp>
  );
};

export default Profile;
