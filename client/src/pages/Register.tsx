import { Box, TextField, Typography } from "@mui/material";
import gql from "graphql-tag";

const REGISTER_USER = gql`
  mutation register(
    $username: String!
    $password: String!
    $confirmPassword: String!
    $email: String!
  ) {
    register(
      registerInput: {
        username: $username
        password: $password
        confirmPassword: $confirmPassword
        email: $email
      }
    ) {
      id
      email
      token
      username
      createdAt
    }
  }
`;

function Register() {
  return (
    <Box sx={{ marginTop: "1rem" }}>
      <Typography variant="h5">HEllo World</Typography>
      <TextField
        required
        id="outlined-required"
        label="Required"
        defaultValue="Hello World"
        variant="outlined"
        sx={{
          "& .MuiInputBase-input": {
            color: "white",
          },
          "& .MuiFormLabel-root.Mui-focused": {
            color: "white", // Change label color when focused
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white", // Change default border color
            },

            "&:hover fieldset": {
              borderColor: "orange", // Change border color on hover
            },
            "&.Mui-focused fieldset": {
              borderColor: "yellow", // Change border color when focused
            },
            "&.Mui-error fieldset": {
              borderColor: "red", // Change border color when there's an error
            },
          },
        }}
      />
    </Box>
  );
}

export default Register;
