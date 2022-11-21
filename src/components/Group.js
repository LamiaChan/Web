import { Typography, Stack } from '@mui/material';

export default function Group(props) {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        {props.title}
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        {props.subtitle}
      </Typography>
      <Stack spacing={2}>
        {props.children}
      </Stack>
    </>
  )
}