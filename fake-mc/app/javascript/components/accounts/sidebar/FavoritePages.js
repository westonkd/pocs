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

import { BsMagic, BsMoonStars, BsStar } from "react-icons/bs";

const FavoritePages = () => {
  return (
    <Accordion defaultIndex={[0]} allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left" paddingLeft={6}>
              <Text>FAVORITE PAGES</Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <VStack align="stretch" paddingLeft={6}>
            <Link>
              <HStack>
                <Icon boxSize={5} as={BsMagic} marginRight={1} />
                <Text as="b" fontSize="lg">
                  Transfiguration Overview
                </Text>
              </HStack>
            </Link>

            <Link>
              <HStack>
                <Icon boxSize={5} as={BsMoonStars} marginRight={1} />
                <Text as="b" fontSize="lg">
                  Divination Final Exam
                </Text>
              </HStack>
            </Link>

            <Link>
              <HStack>
                <Icon boxSize={5} as={BsStar} marginRight={1} />
                <Text as="b" fontSize="lg">
                  Potions Q&A
                </Text>
              </HStack>
            </Link>
          </VStack>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default FavoritePages;
