import React from "react";
import ChakraApp from "../ChakraApp";
import UserProfile from "./sidebar/UserProfile";
import FavoritePages from "./sidebar/FavoritePages";

import { Flex, Box, Text } from "@chakra-ui/react";

const Profile = () => {
  return (
    <ChakraApp>
      <Flex color="#444344">
        <Box bg="#f1eef3" width="400px" height="100vh">
          <UserProfile
            user={{
              name: "Luna Lovegood",
              profile:
                "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/large-painted-panda-head-licensed-art.jpg",
            }}
            organization={{ name: "Hogwarts" }}
          />
          <FavoritePages />
        </Box>
        <Box flex="1" bg="white" height="100vh" boxShadow="md">
          <Text>Box 3</Text>
        </Box>
      </Flex>
    </ChakraApp>
  );
};

export default Profile;
