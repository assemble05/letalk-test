import { createContext, useState } from "react";
import { IInstallmentPropsProvider, ILoanData, InterfaceConfirmUserDatas, IProviderProps, UserContextType } from "../../interfaces";
import api from "../../services/api";

export const LoanContext = createContext<UserContextType>({} as UserContextType);

const LoanProvider = ({ children }: IProviderProps) => {
  const [requestInstallment , setInstallment] = useState({} as IInstallmentPropsProvider)
  const [simulationData, setSimulationData] = useState({} as any)
  const loanData = async (data: ILoanData) => {
    
    setSimulationData(data)

    api.post("loan", data)
      .then((response) => {
        setInstallment(response.data)
        })
      .catch((err) => console.log(err));


  };

  const confirmInstallmentFunction = async () => {
     if(simulationData){
       console.log(simulationData.data)
      api.post("loan/confirmation", simulationData.data)
      .then((response) => {
        console.log(response.data)
        })
      .catch((err) => console.log(err));
     }
  }

  return (
    <LoanContext.Provider value={{ loanData,requestInstallment,confirmInstallmentFunction }}>{children}</LoanContext.Provider>
  );
};
export default LoanProvider;
