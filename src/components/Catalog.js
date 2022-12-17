import { Stack } from "@mui/system";
import { TextField, Checkbox, FormControlLabel, FormGroup } from "@mui/material";

export function FromToInput(props) {
  const { FromLabel = "From" } = props;
  const { ToLabel = "To" } = props;

  return (
    <Stack direction="row" spacing={2}>
      <TextField 
        size="small" 
        id="outlined-basic" 
        label={FromLabel} 
        variant="outlined" 
      />
      <TextField 
        size="small" 
        id="outlined-basic" 
        label={ToLabel}
        variant="outlined" 
      />
    </Stack>
  )
}

export function TitleType(props) {
  return (
    <Stack direction="row" spacing={2}>
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Label 1" />
        <FormControlLabel control={<Checkbox />} label="Label 2" />
        <FormControlLabel control={<Checkbox />} label="Label 1" />
        <FormControlLabel control={<Checkbox />} label="Label 2" />
      </FormGroup>
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Label 1" />
        <FormControlLabel control={<Checkbox />} label="Label 2" />
        <FormControlLabel control={<Checkbox />} label="Label 1" />
        <FormControlLabel control={<Checkbox />} label="Label 2" />
      </FormGroup>
    </Stack>
  )
}

export function Genres(props) {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox />} label="Gen 1" />
      <FormControlLabel control={<Checkbox />} label="Gen 2" />
    </FormGroup>
  )
}