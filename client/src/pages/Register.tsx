import { Box, TextField, Typography, useTheme } from "@mui/material";
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
  const theme = useTheme();

  return (
    <Box sx={{ marginTop: "1rem" }}>
      <Typography variant="h5">Register</Typography>
      <TextField
        required
        id="outlined-required"
        label="Username"
        variant="outlined"
        sx={{
          "& .MuiInputBase-input": {
            ...theme.typography.body2,
            color: "#FFFFFF",
          },
          "& .MuiFormLabel-root.Mui-focused": {
            color: "#FFFFFF", // Change label color when focused
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#FFFFFF", // Change default border color
            },

            "&:hover fieldset": {
              borderColor: theme.palette.tertiary.main, // Change border color on hover
            },
            "&.Mui-focused fieldset": {
              borderColor: theme.palette.tertiary.main, // Change border color when focused
            },
            "&.Mui-error fieldset": {
              borderColor: theme.palette.secondary.main, // Change border color when there's an error
            },
          },
        }}
      />
    </Box>
  );
}

export default Register;
