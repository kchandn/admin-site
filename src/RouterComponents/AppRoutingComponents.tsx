import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Components/Login";
import Dashboard from "../Components/Dashboard";
import EmployeeList from "../Components/EmployeeList";
import EmployeeDetail from "../Components/employeeDetail";
import PageNotFound from "../Components/PageNotFound";

const AppRoutingComponents = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />}></Route>
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="employeelist" element={<EmployeeList />}></Route>
          <Route
            path="/employee-detail/:id"
            element={<EmployeeDetail />}
          ></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRoutingComponents;
