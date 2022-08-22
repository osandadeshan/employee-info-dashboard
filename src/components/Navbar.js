import React from "react";
import { Navbar, Form, FormControl } from "react-bootstrap";

const Navbars = (props) => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.pathname = "/signin";
  };

  const isAuthenticated = localStorage.getItem("isAuthenticated");

  return (
    <Navbar className="bg-light justify-content-between">
      <Navbar.Brand href="#">Employee Information</Navbar.Brand>
      <form class="form-inline">
        {!isAuthenticated ? null : (
          <>
            <div class="form-group mx-sm-3 mb-2">
              <input
                type="text"
                name="term"
                disabled={props.isSearch}
                class="form-control"
                placeholder="Search"
                value={props.search}
                onChange={props.onSearch}
                id="term"
              />
            </div>

            <button
              type="submit"
              onClick={handleLogout}
              class="btn btn-danger mb-2 mt-0"
              style={{ marginTop: "0px" }}
            >
              Logout
            </button>
          </>
        )}
      </form>
    </Navbar>
  );
};

export default Navbars;
