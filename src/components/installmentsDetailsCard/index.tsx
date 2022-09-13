import { DivWrapper } from "./installmentDetailStyle"

interface Ia {
    name : string
    value : string
}
const InstallmentsDetails = ({name,value} : Ia) => {

    return (<DivWrapper>
       <span>{name}</span>
       <h3>{value}</h3>
    </DivWrapper>)
}
export default InstallmentsDetails