import { createContext, useState } from "react";
import { IInstallmentPropsProvider, ILoanData, IProviderProps, UserContextType } from "../../interfaces";
import api from "../../services/api";

export const LoanContext = createContext<UserContextType>({} as UserContextType);

const LoanProvider = ({ children }: IProviderProps) => {
  const [requestInstallment , setInstallment] = useState({} as IInstallmentPropsProvider)
  
  const loanData = async (data: ILoanData) => {
    api.post("loan", data)
      .then((response) => {
        setInstallment(response.data)
        })
      .catch((err) => console.log(err));


  };

  return (
    <LoanContext.Provider value={{ loanData,requestInstallment }}>{children}</LoanContext.Provider>
  );
};
export default LoanProvider;
