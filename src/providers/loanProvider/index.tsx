import { createContext, useState } from "react";
import {
  IInstallmentPropsProvider,
  ILoanData,
  IProviderProps,
  UserContextType,
} from "../../interfaces";
import { api } from "../../services/api";
import 'react-toastify/dist/ReactToastify.css';
export const LoanContext = createContext<UserContextType>(
  {} as UserContextType
);

const LoanProvider = ({ children }: IProviderProps) => {
  const [requestInstallment, setInstallment] = useState(
    {} as IInstallmentPropsProvider
  );
  const [simulationData, setSimulationData] = useState({} as any);
  const [loanSucessToast, setSucessToast] = useState(false)
  const loanData = async (data: ILoanData) => {
    setSimulationData(data);

    api
      .post("loan", data)
      .then((response) => {
        setInstallment(response.data);

      })
      .catch((err) => console.log(err));
  };

  const confirmInstallmentFunction = async () => {
    if (simulationData) {
      api
        .post("loan/confirmation", simulationData.data)
        .then((response) => {
          if(response.status === 200){
            setSucessToast(true)
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <LoanContext.Provider
      value={{ loanData, requestInstallment, confirmInstallmentFunction,loanSucessToast }}
    >
      {children}
    </LoanContext.Provider>
  );
};
export default LoanProvider;
