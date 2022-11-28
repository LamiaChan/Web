import { BoxWithTitleSubCol, PaperWithMangaRow, PaperWithMangaCol, FeedRow } from "../../components/Manga/ContentOrginization";
import { BasicTitle, GeneratedTitle, FeedTitle } from "../../components/Manga/Title";
import { Grid, Box } from "@mui/material";

function WrappedGeneratedTitle(props) {
  return (
    <BoxWithTitleSubCol 
      title="Personal selections" 
      subtitle="The more titles you like, the more accurate the recommendations"
      sx={{ m: 3}} 
    >
      <PaperWithMangaRow showAllButton>
        <GeneratedTitle />
        <GeneratedTitle />
        <GeneratedTitle />
        <GeneratedTitle />
        <GeneratedTitle />
        <GeneratedTitle />
        <GeneratedTitle />
        <GeneratedTitle />
        <GeneratedTitle />
        <GeneratedTitle />
        <GeneratedTitle />
      </PaperWithMangaRow>
  </BoxWithTitleSubCol>
  )
}

function WrappedPopularTitles(props) {
  return (
    <BoxWithTitleSubCol 
      title="Personal selections" 
      subtitle="The more titles you like, the more accurate the recommendations"
      sx={{ m: 3}} 
    >
      <PaperWithMangaRow showAllButton withBackground>
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
  )
}

function WrappedFeed(props) {
  return (
    <BoxWithTitleSubCol 
        title="Personal selections" 
        subtitle="The more titles you like, the more accurate the recommendations"
        sx={{ m: 3 }} 
      >
        <FeedRow>
          <PaperWithMangaCol withBackground title="Manga">
            <FeedTitle />
            <FeedTitle />
            <FeedTitle />
            <FeedTitle />
            <FeedTitle />
            <FeedTitle />
            <FeedTitle />
            <FeedTitle />
          </PaperWithMangaCol>
          <PaperWithMangaCol withBackground title="Anime">
            <FeedTitle />
            <FeedTitle />
            <FeedTitle />
            <FeedTitle />
            <FeedTitle />
            <FeedTitle />
            <FeedTitle />
            <FeedTitle />
          </PaperWithMangaCol>
        </FeedRow>
    </BoxWithTitleSubCol>
  )
}

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
      <WrappedGeneratedTitle />
      <WrappedPopularTitles />
      <WrappedFeed />
    </Grid>
  )
}