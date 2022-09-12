import { IInputProps } from "../../interfaces";
import StyledInput from "./inputStyle";

const Input = ({ placeholder, registerName, register }: IInputProps) => {
  return <StyledInput placeholder={placeholder} {...register(registerName)} />;
};
export default Input;
