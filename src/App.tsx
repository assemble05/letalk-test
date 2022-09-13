import {ToastContainer } from "react-toastify";
import "./App.css";
import LoanForm from "./components/form/form";
import InstallmentTable from "./components/installmentsTable";

function App() {

  return (
    <div className="App">
       <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
      <h1>Simule e solicite o seu empréstimo.</h1>
      <h6>Preencha o formulário abaixo para simular</h6>

      <LoanForm />
      <h4>Veja a simulação para o seu empréstimo antes de efetivar</h4>
      <InstallmentTable />
    </div>
  );
}

export default App;
