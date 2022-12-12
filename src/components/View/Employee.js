import React from "react";
import { useHistory } from "react-router";
import { Box, Button, Flex } from "../styled";
import EmployeeCard from "./styled/EmployeeCard";

const Employee = ({ emp, handleDeleteEmployee }) => {
  const history = useHistory();

  return (
    <EmployeeCard data-cy={`employee-${emp.id}`}>
      <p className="fullname">
        <strong>Name:</strong> {`${emp.firstName} ${emp.surname}`}
      </p>
      <p className="email">
        <strong>Email:</strong> {emp.email}
      </p>
      <p className="birtdate">
        <strong>Birth Date:</strong> {emp.birthDate}
      </p>
      <p className="jobtitle">
        <strong>Job Title:</strong> {emp.jobTitle}
      </p>
      <p className="status">
        <strong>Status:</strong> {emp.status}
      </p>
      <Flex>
        <Box>
          <Button
            data-cy={`editButton-${emp.id}`}
            btnSm
            marginRight="xs"
            onClick={() => history.push(`/edit/${emp.id}`)}
          >
            Edit
          </Button>
          <Button
            data-cy={`deleteButton-${emp.id}`}
            btnSm
            backgroundColor="danger"
            onClick={() => handleDeleteEmployee(emp.id)}
          >
            Delete
          </Button>
        </Box>
      </Flex>
    </EmployeeCard>
  );
};

export default Employee;
