import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.css';
import { EmployeesList } from './components/EmployeesList';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { NewEmployee } from './components/NewEmployee';
import { UpdateEmployee } from './components/UpdateEmployee';
import { ViewEmployee } from './components/ViewEmployee';

function App() {
  return (
    <div>
      <BrowserRouter>
     <Routes>
            <Route path="/" element={<Header/>}>
               <Route path="/" element= {<EmployeesList/>}></Route>
               <Route path="/employees" element= {<EmployeesList/>}></Route>
               <Route index element= {<EmployeesList/>}></Route>
               <Route path="/addEmployee" element= {<NewEmployee/>}></Route>
               <Route path="/update-employee/:id" element= {<UpdateEmployee/>}></Route>
               <Route path="/view-employee/:id" element= {<ViewEmployee/>}></Route>
            </Route>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
