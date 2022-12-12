import React, { useState, useCallback } from "react";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Box, Button, Flex, Header } from "../styled";
import Employee from "./Employee";
import EmployeeGrid from "./styled/EmployeeGrid";
import TextField from "../FormComponents/styled/TextField";
import SelectField from "../FormComponents/styled/SelectField";
import { deleteEmployee } from "../../redux/employees";

const View = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const allEmployees = useSelector(state => state.employees.employees_records);

  const [employees, setEmployees] = useState(allEmployees);

  const handleDeleteEmployee = useCallback(
    id => {
      dispatch(deleteEmployee(id));
      const newArray = employees.filter(emp => emp.id !== id);
      setEmployees(newArray);
    },
    [dispatch, employees]
  );

  const filterByName = (filterStr, arrObj) => {
    const filteredArr = arrObj.filter(obj => {
      return (
        obj.firstName.toLowerCase().includes(filterStr.toLowerCase()) ||
        obj.surname.toLowerCase().includes(filterStr.toLowerCase())
      );
    });

    return filteredArr;
  };

  const filterByStatus = (filterStr, arrObj) => {
    const filteredArr = arrObj.filter(obj => {
      return obj.status.toLowerCase().includes(filterStr.toLowerCase());
    });

    return filteredArr;
  };

  const handleSearch = e => {
    setEmployees(filterByName(e.target.value, allEmployees));
  };

  const handleStatusFilter = e => {
    setEmployees(filterByStatus(e.target.value, allEmployees));
  };

  return (
    <>
      <Header data-cy="header">View Employees</Header>
      <Box marginBottom="md" marginHorizontal="auto" width="84%">
        <Flex alignItems="center" justifyContent="center" marginTop="lg">
          <TextField
            data-cy="searchInput"
            fontSize="lg"
            placeholder="Search by name..."
            type="text"
            fluid
            marginRight="md"
            onChange={handleSearch}
          />

          <SelectField
            as="select"
            data-cy="StatusFilterInput"
            fontSize="lg"
            fluid
            onChange={handleStatusFilter}
          >
            <option value="">Filter by status</option>
            <option value="ACTIVE">Active</option>
            <option value="LEAVE_OF_ABSENCE">Leave of absence</option>
            <option value="TERMINATED">Terminated</option>
          </SelectField>
        </Flex>
      </Box>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        marginTop="lg"
      >
        {employees.length ? (
          <EmployeeGrid marginBottom="lg">
            {employees.map(employee => (
              <Employee
                key={employee.id}
                emp={employee}
                handleDeleteEmployee={handleDeleteEmployee}
              />
            ))}
          </EmployeeGrid>
        ) : (
          <p data-cy="noEmployee">No employee record.</p>
        )}
        <Box>
          <Button data-cy="backButton" onClick={() => history.goBack()}>
            Back
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default View;
