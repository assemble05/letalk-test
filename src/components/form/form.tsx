import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { LoanContext } from "../../providers/loanProvider";
import { loanSchema } from "../../validations/inputSchemaValidator";
import Input from "../input/input";
import StyledForm from "./styledForm";

const LoanForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loanSchema) });

  
  const { loanData } = useContext(LoanContext);

  const onSubmitFunction =  handleSubmit ((data) => {
    
    loanData({data})
  });
  return (
    <StyledForm onSubmit={onSubmitFunction}>
      <Input placeholder="CPF" registerName="cpf" register={register} />
      <Input placeholder="UF" registerName="uf" register={register} />
      <Input
        placeholder="DATA DE NASCIMENTO"
        registerName="birth_date"
        register={register}
      />
      <Input
        placeholder="QUAL O VALOR DO EMPRÉSTIMO"
        registerName="value"
        register={register}
      />
      <Input
        placeholder="QUAL VALOR DESEJA PAGAR POR MÊS"
        registerName="portion"
        register={register}
      />
      <button type="submit">SIMULAR</button>
    </StyledForm>
  );
};
export default LoanForm;
