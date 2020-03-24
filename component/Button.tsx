import React from "react";
import Enhancer from "../hoc/withAdd";

const Button = (props) => {
const { Add, state } = props;
  return <button onClick={Add}>Count {state} Times </button>;
};

export default Enhancer(Button);
