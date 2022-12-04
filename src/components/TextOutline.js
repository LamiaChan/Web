import { Typography, Box } from "@mui/material";

export default function TextOutline(props) {
  return (
    <Box>
      <Typography 
        variant="button" 
        display="block" 
        gutterBottom
        sx={{
          backgroundColor: '#524F4F',
          borderRadius: '4px',

        }}
      >
        {props.text}
      </Typography>
    </Box>
  )
}