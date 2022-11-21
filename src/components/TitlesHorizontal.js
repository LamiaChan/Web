import { Container, Grid } from "@mui/material";
import { useTheme } from '@mui/material/styles';

export default function TitlesHorizontal(props) {
  const theme = useTheme();

  return (
    <Grid 
      sx={{
        backgroundColor: theme.palette.background.paper, 
        borderRadius: '20px'
      }}
    >
      <img src="https://mangalib.me/uploads/cover/naruto-digital-colored-comics/cover/fk3SoTZyNAHe_250x350.jpg" />
      <img src="https://mangalib.me/uploads/cover/naruto-digital-colored-comics/cover/fk3SoTZyNAHe_250x350.jpg" />
      <img src="https://mangalib.me/uploads/cover/naruto-digital-colored-comics/cover/fk3SoTZyNAHe_250x350.jpg" />
      <img src="https://mangalib.me/uploads/cover/naruto-digital-colored-comics/cover/fk3SoTZyNAHe_250x350.jpg" />
    </Grid>
  )
}