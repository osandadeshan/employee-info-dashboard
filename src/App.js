import React from "react";
import Navbar from "./components/Navbar";
import EmployeesTable from "./components/EmployeesTable";
import Employees from "./utils/Employees";
import Signin from "./views/Signin";
import { BrowserRouter, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  // Created employees state for storing Employees array
  const [employees] = React.useState(Employees);
  const [searchTerm, setSearchTerm] = React.useState("");

  // Receive callback from Navbar and setSearchTerm
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Search employee and return search results
  const searchedEmployees = employees.filter((result) => {
    const searchByTitle = result.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const searchByfirstName = result.firstName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const searchBylastName = result.lastName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const searchByPhone = result.phone
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const searchByEmail = result.email
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const searchByBirthday = result.birthday
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const searchByAddress = result.address
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return (
      searchByTitle ||
      searchByfirstName ||
      searchBylastName ||
      searchByPhone ||
      searchByEmail ||
      searchByBirthday ||
      searchByAddress
    );
  });

  const EmployeeTableWithData = () => {
    return <EmployeesTable employees={searchedEmployees} />;
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar
          onSearch={handleSearch}
          isSearch={window.location.pathname === "/signin" ? true : false}
          search={searchTerm}
        />
        <Route exact path="/signin" component={Signin} />
        <ProtectedRoute exact path="/" component={EmployeeTableWithData} />
      </BrowserRouter>
    </div>
  );
};

export default App;
