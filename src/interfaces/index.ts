import { ReactNode } from "react";

export interface IInputProps {
  placeholder: string;
  register: any;
  registerName: string;
}

export interface IProviderProps {
  children: ReactNode;
}

export interface ILoanData {
  cpf: string;
  uf: string;
  birth_date: string;
  value: number;
  portion: number;
}

interface IInstalments{
  debit_value: string;
  fees: string; 
  debt: string; 
  installment: string; 
  month: string;

}
export interface UserContextType {
  loanData: any;
  requestInstallment : IInstallmentPropsProvider
  confirmInstallmentFunction : () => void;
  }

  export interface IInstallmentProps {
    debit_value:string;
    fees:string;
    debt:string;
    installment:string;
     month:string;
  }

  export interface IInstallmentPropsProvider {
      cpf: string,
      fees: string,
      monthToPay: string,
      required_value: string,
      fessPerMonth: string,
      amountPeerMonth: string,
      totalToPay: string;
      installments : IInstalments[]
  
  }

  export interface InterfaceConfirmUserDatas {
    data : ILoanData
  }