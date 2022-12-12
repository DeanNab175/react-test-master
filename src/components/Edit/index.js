import React, { useCallback, useState } from "react";
import { useParams, useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Formik } from "formik";
import { Flex, Header } from "../styled";
import FormField from "../FormComponents/FormField";
import FormButtons from "../FormComponents/FormButtons";
import { editEmployee } from "../../redux/employees";
import formValidationSchema from "../FormComponents/formValidationSchema";
import FormSelect from "../FormComponents/FormSelect";
import FormDate from "../FormComponents/FormDate";

const Edit = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const submitForm = useCallback(
    employee => {
      dispatch(editEmployee(employee));
      history.goBack();
    },
    [dispatch, history]
  );

  const params = useParams();
  const allEmployees = useSelector(state => state.employees.employees_records);
  const employeeObj = allEmployees.find(emp => emp.id === Number(params.id));
  const [employee] = useState(employeeObj);

  return (
    <>
      <Header data-cy="header">Edit employee</Header>
      <Formik
        validationSchema={formValidationSchema}
        onSubmit={submitForm}
        initialValues={{
          id: employee.id,
          firstName: employee.firstName,
          surname: employee.surname,
          email: employee.email,
          birthDate: employee.birthDate,
          jobTitle: employee.jobTitle,
          status: employee.status,
        }}
      >
        <Flex alignItems="center" justifyContent="center" height="100%">
          <Flex alignItems="left" direction="column" width="300px">
            <FormField name="firstName" placeholder="First name" />
            <FormField name="surname" placeholder="Surname" />
            <FormField name="email" placeholder="Email" />
            <FormDate name="birthDate" label="Birth Date" />
            <FormField name="jobTitle" placeholder="Job Title" />
            <FormSelect name="status" placeholder="Status">
              <option value="">Please select a status</option>
              <option value="ACTIVE">Active</option>
              <option value="LEAVE_OF_ABSENCE">Leave of absence</option>
              <option value="TERMINATED">Terminated</option>
            </FormSelect>
            <FormButtons />
          </Flex>
        </Flex>
      </Formik>
    </>
  );
};

export default Edit;
