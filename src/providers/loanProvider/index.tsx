import { createContext } from "react";
import { ILoanData, IProviderProps, UserContextType } from "../../interfaces";
import api from "../../services/api";
import axios from "axios"
export const LoanContext = createContext<UserContextType>({} as UserContextType);

const LoanProvider = ({ children }: IProviderProps) => {
  
  
  const loanData = async (data: ILoanData) => {
    api.post("loan", data)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));


  };

  return (
    <LoanContext.Provider value={{ loanData }}>{children}</LoanContext.Provider>
  );
};
export default LoanProvider;
