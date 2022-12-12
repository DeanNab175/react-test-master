import React from "react";
import { Field, useFormikContext } from "formik";
import TextField from "./styled/TextField";
import ErrorMessage from "./styled/ErrorMessage";
import { Box, Flex } from "../styled";
import Label from "../styled/Label";

const FormDate = ({ name, label }) => {
  const { errors, touched } = useFormikContext();
  return (
    <Box marginBottom="md">
      <Field name={name}>
        {({ field, meta }) => (
          <Flex alignItems="center">
            <Label
              htmlFor={`${name}InputDate`}
              error={meta.error && meta.touched}
              marginBottom="xs"
              width="35%"
            >
              {label}
            </Label>
            <TextField
              id={`${name}InputDate`}
              data-cy={`${name}Input`}
              fontSize="lg"
              type="date"
              fluid
              error={meta.error && meta.touched}
              {...field}
            />
          </Flex>
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

export default FormDate;
