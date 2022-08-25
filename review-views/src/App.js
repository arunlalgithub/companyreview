import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';
import Nav from './components/Nav'
import Signup from "./components/signup";
import Login from "./components/Login";
import AddCompany from "./components/AddCompany";
import PrivateComponent from "./components/PrivateComponent";
import CompanyList from "./components/Company_list";
import UpdateComapany from "./components/Update";
import ComapnyDetail from "./components/company_detail";

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <Nav /> */}

        <Routes>
          {/* <Route element={<PrivateComponent/>}>    */}
            <Route path="/addcompany" element={<AddCompany />} />
            <Route path="/companylist" element={<CompanyList />}  />
            <Route path="/companydetail" element={<ComapnyDetail />}  />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Login />} />
          {/* </Route> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
