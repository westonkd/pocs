import React, { useEffect } from "react";
import { Icon } from "@chakra-ui/react";
import { BsHouseDoor, BsInbox } from "react-icons/bs";
import { VStack, HStack, Box, Image, Text, Link, Button } from "@chakra-ui/react";
import { logUserOut } from "inst-auth";


const UserProfile = ({ user, organization, authClient }) => {
  return (
    <VStack align="stretch" p={10}>
      <HStack>
        <Box h="80px">
          <Image
            borderRadius="full"
            boxSize="80px"
            src={user.profile}
            alt={user.name}
            marginRight={3}
          />
        </Box>
        <VStack align="stretch" spacing={0}>
          <Box>
            <Text>{user.name}</Text>
          </Box>
          <Box>
            <Text as="b">{organization.name}</Text>
          </Box>
        </VStack>
      </HStack>

      <Button marginTop={5} onClick={async () => { logUserOut(authClient, ()=>{}) }}>Log Out</Button>

      <Link marginTop={5}>
        <HStack>
          <Icon boxSize={5} as={BsHouseDoor} marginRight={1} />
          <Text as="b" fontSize="lg">
            Home
          </Text>
        </HStack>
      </Link>

      <Link>
        <HStack>
          <Icon boxSize={5} as={BsInbox} marginRight={1} />
          <Text as="b" fontSize="lg">
            Inbox
          </Text>
        </HStack>
      </Link>
    </VStack>
  );
};

export default UserProfile;
