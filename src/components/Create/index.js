import React, { useCallback } from "react";
import { useHistory } from "react-router";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { Flex, Header } from "../styled";
import FormField from "../FormComponents/FormField";
import FormButtons from "../FormComponents/FormButtons";
import formValidationSchema from "../FormComponents/formValidationSchema";
import { saveNewEmployee } from "../../redux/employees/actionCreators";
import FormSelect from "../FormComponents/FormSelect";
import FormDate from "../FormComponents/FormDate";

const Create = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const submitForm = useCallback(
    employee => {
      dispatch(saveNewEmployee(employee));
      history.goBack();
    },
    [dispatch, history]
  );

  return (
    <>
      <Header>Create new employee</Header>
      <Formik
        validationSchema={formValidationSchema}
        onSubmit={submitForm}
        initialValues={{
          firstName: "",
          surname: "",
          email: "",
          birthDate: "",
          jobTitle: "",
          status: "",
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

export default Create;
