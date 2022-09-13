import { useState } from "react";
import InputMask  from "react-input-mask";
import { IInputMask } from "../../interfaces";

const InputWithMask = ({ value,mask,placeholder, register }: IInputMask) => {
  const [stringState, setStringState] = useState("");
  return (<InputMask
  {...register(value)}
  placeholder={placeholder}
  mask={mask}
  value={stringState}
  onChange={(e) => {
    setStringState(e.target.value);
}}/>)
};
export default InputWithMask;
