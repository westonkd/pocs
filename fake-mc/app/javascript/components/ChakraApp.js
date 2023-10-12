import * as React from "react";
import { ChakraProvider, Container } from "@chakra-ui/react";

const ChakraApp = (props) => {
  return <ChakraProvider>{props.children}</ChakraProvider>;
};

export default ChakraApp;
