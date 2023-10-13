import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Link,
  Text,
  HStack,
  Icon,
  VStack,
} from "@chakra-ui/react";

import { BsCircleSquare, BsCCircle, BsRecordCircle } from "react-icons/bs";

const Applications = () => {
  const applications = [
    {
      name: "Canvas",
      id: "asdfdaf",
      // Maybe an "authn URL"?
      url: "",
      organization: {
        name: "Hogwarts",
        id: "adsfasdf9",
      },
      icon: BsCCircle,
      // TODO: Where are these stored?
      links: [
        {
          name: "Dashboard",
          url: "",
        },
        {
          name: "Courses",
          url: "",
        },
        {
          name: "Calendar",
          url: "",
        },
      ],
    },
    {
      name: "Mastery Connect",
      id: "fdas",
      // Maybe an "authn URL"?
      url: "",
      icon: BsCircleSquare,
      organization: {
        name: "Ilvermorny",
        id: "sdfs9ds9",
      },
      // TODO: Where are these stored?
      links: [
        {
          name: "Dashboard",
          url: "",
        },
        {
          name: "Courses",
          url: "",
        },
        {
          name: "Calendar",
          url: "",
        },
      ],
    },
    {
      name: "New Product",
      id: "99dfas",
      // Maybe an "authn URL"?
      url: "",
      icon: BsRecordCircle,
      organization: {
        name: "Hogwarts",
        id: "adsfasdf9",
      },
      // TODO: Where are these stored?
      links: [
        {
          name: "Dashboard",
          url: "",
        },
        {
          name: "Courses",
          url: "",
        },
        {
          name: "Calendar",
          url: "",
        },
      ],
    },
  ];

  return (
    <HStack pt={10} pl={10}>
      <Box as="span" flex="1" textAlign="left">
        <Text>APPLICATIONS</Text>
        {applications.map((application) => (
          <Accordion allowToggle key={application.id}>
            <AccordionItem>
              <h2>
                <AccordionButton pl={0}>
                  <HStack flex="1" textAlign="left">
                    <Icon boxSize={5} as={application.icon} marginRight={1} />
                    <Text as="b" fontSize="lg">
                      {application.name}
                    </Text>
                  </HStack>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <VStack align="stretch" pl={4}>
                  {application.links.map((link) => (
                    <Link key={`${link.url}-${link.name}`}>{link.name}</Link>
                  ))}
                </VStack>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        ))}
      </Box>
    </HStack>
  );
};

export default Applications;
