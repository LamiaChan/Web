import { BoxWithTitleSubCol, PaperWithMangaRow } from "../../components/Manga/ContentOrginization";
import { BasicTitle } from "../../components/Manga/Title";
import { Grid } from "@mui/material";

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
        <BoxWithTitleSubCol 
          title="Personal selections" 
          subtitle="The more titles you like, the more accurate the recommendations"
          sx={{ m: 3}} 
        >
          <PaperWithMangaRow showAllButton>
            <BasicTitle />
            <BasicTitle />
            <BasicTitle />
            <BasicTitle />
            <BasicTitle />
            <BasicTitle />
            <BasicTitle />
            <BasicTitle />
          </PaperWithMangaRow>
      </BoxWithTitleSubCol>
    </Grid>
  )
}