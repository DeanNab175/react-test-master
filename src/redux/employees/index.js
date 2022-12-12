import { createSlice } from "@reduxjs/toolkit";

const defaultEmployee = {
  id: new Date().getTime(),
  firstName: "Abe",
  surname: "Simpson",
  email: "abe.simpson@springfield.com",
  birthDate: "1907-05-25",
  jobTitle: "Work grouch",
  status: "ACTIVE",
};

const initialState = {
  employees_records: [defaultEmployee],
};

const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    saveNewEmployee: {
      prepare: employee => ({
        payload: { ...employee, id: new Date().getTime() },
      }),
      reducer(draftState, action) {
        draftState.employees_records = [
          ...draftState.employees_records,
          action.payload,
        ];
      },
    },
    editEmployee: {
      prepare: employee => ({
        payload: { ...employee },
      }),
      reducer(draftState, action) {
        const index = draftState.employees_records.findIndex(
          emp => emp.id === Number(action.payload.id)
        );

        const newArray = [...draftState.employees_records];
        newArray[index] = action.payload;

        return {
          ...draftState,
          employees_records: newArray,
        };
      },
    },
    deleteEmployee: {
      prepare: id => ({
        payload: { id },
      }),
      reducer(draftState, action) {
        const filteredEmployees = draftState.employees_records.filter(
          emp => emp.id !== Number(action.payload.id)
        );

        return {
          ...draftState,
          employees_records: filteredEmployees,
        };
      },
    },
  },
});

export const { saveNewEmployee, editEmployee, deleteEmployee } =
  employeeSlice.actions;

export default employeeSlice.reducer;
