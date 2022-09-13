import { IInputProps } from "../../interfaces";
import StyledInput from "./inputStyle";

const Input = ({ placeholder, registerName, register, type }: IInputProps) => {
  return <StyledInput type={type} placeholder={placeholder} {...register(registerName)} />;
};
export default Input;
