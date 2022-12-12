import * as yup from "yup";

// Calculate number of years ago
const getYearsAgo = years => {
  const today = new Date();
  const numYearsAgo = today.setFullYear(today.getFullYear() - years);

  return numYearsAgo;
};

const formValidationSchema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed")
    .trim()
    .max(255, "The maximum number of characters is 255")
    .required("Required"),
  surname: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed")
    .trim()
    .max(255, "The maximum number of characters is 255")
    .required("Required"),
  email: yup
    .string()
    .trim()
    .max(255, "The maximum number of characters is 255")
    .email("Invalid email address")
    .required("Required"),
  birthDate: yup
    .date()
    .min(new Date(getYearsAgo(65)), "You are over the retired age")
    .max(new Date(getYearsAgo(18)), "Should be at least 18 years")
    .required("Required"),
  jobTitle: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed")
    .trim()
    .max(255, "The maximum number of characters is 255")
    .required("Required"),
  status: yup
    .string()
    .oneOf(["ACTIVE", "LEAVE_OF_ABSENCE", "TERMINATED"], "Invalid Status")
    .required("Required"),
});

export default formValidationSchema;
