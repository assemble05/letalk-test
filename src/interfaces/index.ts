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
  value: string;
  portion: string;
}


export interface UserContextType {
    loanData: Function;
  }