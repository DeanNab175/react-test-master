import React from "react";
import { Field, useFormikContext } from "formik";
import SelectField from "./styled/SelectField";
import ErrorMessage from "./styled/ErrorMessage";
import { Box } from "../styled";

const FormSelect = ({ name, placeholder, ...props }) => {
  const { errors, touched } = useFormikContext();
  return (
    <Box marginBottom="md">
      <Field name={name}>
        {({ field, meta }) => (
          <SelectField
            as="select"
            data-cy={`${name}Input`}
            fontSize="lg"
            placeholder={placeholder}
            fluid
            error={meta.error && meta.touched}
            {...field}
            {...props}
          />
        )}
      </Field>
      {errors[name] && touched[name] && (
        <ErrorMessage data-cy={`${name}ErrorMessage`}>
          {errors[name]}
        </ErrorMessage>
      )}
    </Box>
  );
};

export default FormSelect;
