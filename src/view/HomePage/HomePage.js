import Group from "../../components/Group";
import TitlesHorizontal from "../../components/TitlesHorizontal";
import { Grid, Stack } from "@mui/material";

export default function HomePage(props) {
  return (
    <Grid 
      sx={{
        width: '95%',
        marginTop: '10px',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
      >
      <Group 
        title="Personal selections" 
        subtitle="The more titles you like, the more accurate the recommendations" 
      />
      <TitlesHorizontal />
    </Grid>
  )
}