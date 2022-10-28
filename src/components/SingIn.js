import { useState } from 'react';
import { setTextFieldError, setTextFieldErrorClear, onTextFieldChangeHandler} from '../functions/forms';
import { Stack, Container, Typography, Button, TextField, Box } from "@mui/material";

export function SingIn(props) {
  let textFieldProps = {
    helperText: null, 
    error: false,
    value: "",
  };

  const [username, setUsername] = useState({...textFieldProps});
  const [password, setPassword] = useState({...textFieldProps});

  function formHandle() {
    //TODO: Check credentials on server side
    if (username.value.length <= 3) {
      setTextFieldError(username, setUsername, "Username must be at least more than 3 characters");
    } else {
      setTextFieldErrorClear(username, setUsername);
    }

    if (password.value.length <= 3) {
      setTextFieldError(password, setPassword, "Password must be at least more than 3 characters");
    } else {
      setTextFieldErrorClear(password, setPassword);
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
        Sing In
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
            label="Password" 
            type={'password'}
            helperText={password.helperText} 
            error={password.error} 
            value={password.value}
            onChange={(e) => onTextFieldChangeHandler(password, setPassword, e.target.value)}
          />

          <Button onClick={formHandle} variant="contained">Submit</Button>
        </Stack>
      </Box>
    </Container>
  );
};