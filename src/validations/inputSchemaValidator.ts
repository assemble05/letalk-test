import * as yup from "yup";

export const loanSchema = yup.object().shape({
  cpf: yup
    .string()
    ,
  uf: yup.string(),
  birth_date: yup.mixed()
  .required("Data de nascimento requerida")
  .transform((value) => {
    const original = value.replace(/[_]/g, "");
    const dateArr = original.split("/");
    const formatDate = new Date(dateArr[2], dateArr[1], dateArr[0]);
    console.log(formatDate)
    return formatDate;
  }),
  value: yup.number(),
  portion: yup.number(),
});
