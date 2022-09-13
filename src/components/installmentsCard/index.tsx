import { IInstallmentProps } from "../../interfaces"

const InstallmentCard = ({debit_value,fees,debt,installment, month} : IInstallmentProps) => {
    return (<tr>
      <td>{debt}</td>
      <td>{fees}</td>
      <td>{debit_value}</td>
      <td>{installment}</td>
      <td>{month}</td>  
    </tr>)
}
export default InstallmentCard