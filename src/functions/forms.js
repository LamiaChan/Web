export const setTextFieldError = (getter, setter, errorMessage) => {
  setter(
    {
      ...getter, 
      ...{
        error: true, 
        helperText: errorMessage
      }
    }
  );
};

export const setTextFieldErrorClear = (getter, setter) => {
  setter(
    {
      ...getter, 
      ...{
        error: false, 
        helperText: ''
      }
    }
  );
};

export const onTextFieldChangeHandler = (getter, setter, value) => {
  setter(
    {
      ...getter, 
      ...{
        value: value,
        error: false, 
        helperText: ''
      }
    }
  );
};