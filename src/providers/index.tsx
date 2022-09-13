import { IProviderProps } from "../interfaces";
import LoanProvider from "./loanProvider";

const Providers = ({ children }: IProviderProps) => {
  return <LoanProvider>{children}</LoanProvider>;
};
export default Providers;
