import './App.css';
import LoanForm from './components/form/form';
import InstallmentTable from './components/installmentsTable';

function App() {
  return (
    <div className="App">
       <LoanForm/>

       <InstallmentTable/>
    </div>
  );
}

export default App;
