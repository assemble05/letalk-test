import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { LoanContext } from "../../providers/loanProvider";
import { loanSchema } from "../../validations/inputSchemaValidator";
import Input from "../input/input";
import InputWithMask from "../input/inputWithMask";
import StyledForm from "./styledForm";

const LoanForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loanSchema) });

  const { loanData } = useContext(LoanContext);

  const onSubmitFunction = handleSubmit((data) => {
    loanData({ data });
  });
  return (
    <StyledForm onSubmit={onSubmitFunction}>
      <InputWithMask
        value="cpf"
        register={register}
        placeholder={"CPF"}
        label={"CPF"}
        error_status={!!errors.cpf?.message}
        error={errors.cpf?.message}
        mask="999.999.999-99"
      />

      <Input placeholder="UF" registerName="uf" register={register} type="text"/>

      <InputWithMask
        value="birth_date"
        register={register}
        placeholder={"DATA DE NASCIMENTO"}
        label={"birth_date"}
        mask="99-99-9999"
      />
      <Input
        placeholder="QUAL O VALOR DO EMPRÉSTIMO"
        registerName="value"
        register={register}
        type="number"
      />
      <Input
        placeholder="QUAL VALOR DESEJA PAGAR POR MÊS"
        registerName="portion"
        register={register}
        type="number"
      />
      <button type="submit">SIMULAR</button>
    </StyledForm>
  );
};
export default LoanForm;
