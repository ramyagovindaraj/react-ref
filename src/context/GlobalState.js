import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  employees: [
    { id: 1, name: "Sathish", location: "Madurai", designation: "API Dev" },
    { id: 2, name: "Saro", location: "Coimbatore", designation: "UI Dev" },
    { id: 3, name: "Thiru", location: "Ramnad", designation: "DevOps" },
  ],
  departments: [
    { id: 1, name: "Designer", branch: "summa" },
  ]

};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function removeEmployee(id) {
    dispatch({
      type: "REMOVE_EMPLOYEE",
      payload: id,
    });
  }

  function addEmployee(employees) {
    dispatch({
      type: "ADD_EMPLOYEES",
      payload: employees,
    });
  }

  function editEmployee(employees) {
    dispatch({
      type: "EDIT_EMPLOYEE",
      payload: employees,
    });
  }

  function addDepartment(department) {
    dispatch({
      type: "ADD_DEPARTMENT",
      payload: department,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        employees: state.employees,
        departments: state.departments,
        addDepartment,
        removeEmployee,
        addEmployee,
        editEmployee,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
