import { useContext } from "react";
import { LoanContext } from "../../providers/loanProvider";
import InstallmentCard from "../installmentsCard";
import InstallmentsDetails from "../installmentsDetailsCard";
import { Container, TableStyle, WrapperDiv } from "./installmentStyle";
import { toast } from "react-toastify";
const InstallmentTable = () => {
  const { requestInstallment, confirmInstallmentFunction, loanSucessToast } =
    useContext(LoanContext);

  const {
    required_value,
    fessPerMonth,
    amountPeerMonth,
    monthToPay,
    fees,
    totalToPay,
    installments,
  } = requestInstallment;

  const toastSucess = () =>
    toast.success("Emprestimo realizado!!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  if (installments) {
    return (
      <WrapperDiv>
        <Container>
          <div className="organize_element-table">
            <InstallmentsDetails
              value={required_value}
              name={"VALOR REQUERIDO:"}
            />
            <InstallmentsDetails value={fessPerMonth} name={"TAXA DE JUROS"} />
            <InstallmentsDetails
              value={amountPeerMonth}
              name={"VALOR DA PARCELA"}
            />
          </div>
          <div className="organize_element-table">
            <InstallmentsDetails
              value={monthToPay}
              name={"TOTAL DE MESES PARA QUITAR"}
            />
            <InstallmentsDetails value={fees} name={"TOTAL DE JUROS"} />
            <InstallmentsDetails value={totalToPay} name={"TOTAL A PAGAR"} />
          </div>
        </Container>
        <TableStyle>
          <thead>
            <tr>
              <th>SALDO DEVEDOR</th>
              <th>JUROS</th>
              <th>SALDO DEVEDOR AJUSTADO</th>
              <th>VALOR DA PARCELA</th>
              <th>VENCIMENTO</th>
            </tr>
          </thead>
          <tbody>
            {installments &&
              installments.map((value: any) => {
                const { debit_value, fees, debt, installment, month } = value;
                return (
                  <InstallmentCard
                    key={fees}
                    debit_value={debit_value}
                    fees={fees}
                    debt={debt}
                    installment={installment}
                    month={month}
                  />
                );
              })}
          </tbody>
        </TableStyle>
        <button
          onClick={() => {
            confirmInstallmentFunction();
            if (loanSucessToast) {
              toastSucess();
            }
          }}
        >
          EFETIVAR EMPR??STIMO
        </button>
      </WrapperDiv>
    );
  }

  return <span></span>;
};

export default InstallmentTable;
