import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";

const ChakraApp = (props) => {
  return <ChakraProvider>{props.children}</ChakraProvider>;
};

export default ChakraApp;
