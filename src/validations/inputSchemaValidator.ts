import * as yup from "yup";

export const loanSchema = yup.object().shape({
  cpf: yup
    .string()
    .required("CPF requerido")
    .transform((value) => value.replace(/[ _.-]/g, ""))
    .length(11, "CPF invalido"),
  uf: yup.string().max(2, "Apenas siglas"),
  birth_date: yup
    .mixed()
    .required("Data de nascimento requerida")
    .transform((value) => {
      const original = value.replace(/[_]/g, "");
      const dateArr = original.split("/");
      const formatDate = new Date(dateArr[2], dateArr[1], dateArr[0]);
      return formatDate;
    }),
  value: yup.string(),
  portion: yup.string(),
});
