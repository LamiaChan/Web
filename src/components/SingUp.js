import { useState, useEffect } from 'react';
import { setTextFieldError, setTextFieldErrorClear, onTextFieldChangeHandler} from '../functions/forms';
import { Stack, Container, Typography, Button, TextField, Box } from "@mui/material";

export function SingUp(props) {
  let textFieldProps = {
    helperText: null, 
    error: false,
    value: "",
  };

  let emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const [username, setUsername] = useState({...textFieldProps});
  const [email, setEmail] = useState({...textFieldProps});
  const [password, setPassword] = useState({...textFieldProps});
  const [passwordRepeat, setPasswordRepeat] = useState({...textFieldProps});

  const validatePassword = (value) => {
    let digit = String(value).match(/([1-9][0-9]*)/g);
    let lowerCase = String(value).match(/[a-z]/g);
    let upperCase = String(value).match(/[A-Z]/g);
    let characters = String(value).match(/^[a-zA-Z0-9]{8,}$/);

    if (digit == null) {
      setTextFieldError(password, setPassword, "Password should contain at least one digit");
      return false;
    } else if (lowerCase == null) {
      setTextFieldError(password, setPassword, "Password should contain at least one lower case");
      return false;
    } else if (upperCase == null) {
      setTextFieldError(password, setPassword, "Password should contain at least one upper case");
      return false;
    } else if (characters == null) {
      setTextFieldError(password, setPassword, "Password should contain at least 8 from the mentioned characters");
      return false;
    }

    setTextFieldErrorClear(password, setPassword);
    return true;
  };

  const validateEmail = (value) => {
    return String(value).toLowerCase().match(emailRegEx) == null ? false : true;
  };

  function formHandle() {
    //TODO: Check if email address is available
    if (username.value.length <= 3) {
      setTextFieldError(username, setUsername, "Username must be at least more than 3 characters");
    } else {
      setTextFieldErrorClear(username, setUsername);
    }

    if (!validateEmail(email.value)) {
      setTextFieldError(email, setEmail, "Incorrect email address");
    } else {
      setTextFieldErrorClear(email, setEmail);
    }

    validatePassword(password.value);

    if (password.value !== passwordRepeat.value || passwordRepeat.value.length === 0) {
      setTextFieldError(passwordRepeat, setPasswordRepeat, "Password must be match");
    } else {
      setTextFieldErrorClear(passwordRepeat, setPasswordRepeat);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography 
        variant={'h4'} 
        gutterBottom 
        align="center"
        sx={{color: 'primary.contrastText'}}
      >
        Sing Up
      </Typography>
      <Box sx={{
          border: '2px solid',
          borderRadius: '5px',
          borderColor: 'primary.main',
          padding: '15px',
        }}
        component="form"
        noValidate
      >
        <Stack spacing={2}>
          <TextField 
            required
            variant="standard" 
            label="Username" 
            helperText={username.helperText} 
            error={username.error} 
            value={username.value}
            onChange={(e) => onTextFieldChangeHandler(username, setUsername, e.target.value)}
          />
          <TextField 
            required
            variant="standard" 
            label="Email" 
            helperText={email.helperText} 
            error={email.error} 
            value={email.value}
            onChange={(e) => onTextFieldChangeHandler(email, setEmail, e.target.value)}
          />
          <TextField 
            required
            variant="standard" 
            label="Password" 
            type={'password'}
            helperText={password.helperText} 
            error={password.error} 
            value={password.value}
            onChange={(e) => onTextFieldChangeHandler(password, setPassword, e.target.value)}
          />
          <TextField 
            required
            variant="standard" 
            label="Password Repeat" 
            type={'password'}
            helperText={passwordRepeat.helperText} 
            error={passwordRepeat.error} 
            value={passwordRepeat.value}
            onChange={(e) => onTextFieldChangeHandler(passwordRepeat, setPasswordRepeat, e.target.value)}
          />
          <Button onClick={formHandle} variant="contained">Submit</Button>
        </Stack>
      </Box>
    </Container>
  );
};