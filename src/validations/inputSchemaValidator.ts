import * as yup from "yup";

export const loanSchema = yup.object().shape({
  cpf: yup
    .string()
    ,
  uf: yup.string(),
  birth_date: yup.string(),
  value: yup.number(),
  portion: yup.number(),
});
