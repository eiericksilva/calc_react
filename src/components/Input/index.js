import React from "react";
import { InputContainer } from "./styles";

const Input = (props) => {
  const { value } = props;
  return (
    <InputContainer>
      <input disabled value={value} />
    </InputContainer>
  );
};

export default Input;
