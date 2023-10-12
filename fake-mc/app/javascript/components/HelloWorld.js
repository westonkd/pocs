import React from "react"
import PropTypes from "prop-types"
import ChakraApp from "./ChakraApp"

const HelloWorld = (props) => {
  return (
    <ChakraApp>
      <React.Fragment>
        Greetingssss: {props.greeting}
      </React.Fragment>
    </ChakraApp>
  )
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};

export default HelloWorld
