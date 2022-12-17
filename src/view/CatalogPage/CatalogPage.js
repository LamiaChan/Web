import { Grid, Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { CatalogTitle } from '../../components/Manga/Title';
import { FromToInput, TitleType, Genres } from '../../components/Catalog';

export default function CatalogPage(props) {
  const theme = useTheme();
  const CatalogPageStyle = {
    container: {
      width: '95%',
      marginTop: '10px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    content: {
      backgroundColor: theme.palette.background.paper,
      borderRadius: '10px',
      display: 'flex',
      flexWrap: 'wrap',
      m: 2,
    },
    filters: {
      backgroundColor: theme.palette.background.paper,
      borderRadius: '10px',
      maxWidth: '350px',
      m: 2,
      p: 2,
      position: 'fixed'
    }
  }

  return (
    <Grid 
      container 
      sx={CatalogPageStyle.container}
    >
      <Grid 
        item 
        xs={9} 
        sx={CatalogPageStyle.content}
      >
        <CatalogTitle title="naroo o oooo" likes="10m" />
        <CatalogTitle title="naroo o oooo" likes="10m" />
        <CatalogTitle title="naroo o oooo" likes="10m" />
        <CatalogTitle title="naroo o oooo" likes="10m" />
        <CatalogTitle title="naroo o oooo" likes="10m" />
        <CatalogTitle title="naroo o oooo" likes="10m" />
        <CatalogTitle title="naroo o oooo" likes="10m" />
        <CatalogTitle title="naroo o oooo" likes="10m" />
        <CatalogTitle title="naroo o oooo" likes="10m" />
        <CatalogTitle title="naroo o oooo" likes="10m" />
        <CatalogTitle title="naroo o oooo" likes="10m" />
        <CatalogTitle title="naroo o oooo" likes="10m" />
        <CatalogTitle title="naroo o oooo" likes="10m" />
        <CatalogTitle title="naroo o oooo" likes="10m" />
        <CatalogTitle title="naroo o oooo" likes="10m" />
        <CatalogTitle title="naroo o oooo" likes="10m" />
        <CatalogTitle title="naroo o oooo" likes="10m" />
        <CatalogTitle title="naroo o oooo" likes="10m" />
        <CatalogTitle title="naroo o oooo" likes="10m" />
        <CatalogTitle title="naroo o oooo" likes="10m" />
        <CatalogTitle title="naroo o oooo" likes="10m" />
        <CatalogTitle title="naroo o oooo" likes="10m" />
        <CatalogTitle title="naroo o oooo" likes="10m" />
        <CatalogTitle title="naroo o oooo" likes="10m" />
        <CatalogTitle title="naroo o oooo" likes="10m" />
        <CatalogTitle title="naroo o oooo" likes="10m" />
        <CatalogTitle title="naroo o oooo" likes="10m" />
        <CatalogTitle title="naroo o oooo" likes="10m" />
        <CatalogTitle title="naroo o oooo" likes="10m" />
        <CatalogTitle title="naroo o oooo" likes="10m" />
        <CatalogTitle title="naroo o oooo" likes="10m" />
        <CatalogTitle title="naroo o oooo" likes="10m" />
        <CatalogTitle title="naroo o oooo" likes="10m" />
        <CatalogTitle title="naroo o oooo" likes="10m" />
        <CatalogTitle title="naroo o oooo" likes="10m" />
        <CatalogTitle title="naroo o oooo" likes="10m" />
        <CatalogTitle title="naroo o oooo" likes="10m" />
        <CatalogTitle title="naroo o oooo" likes="10m" />
        <CatalogTitle title="naroo o oooo" likes="10m" />
        <CatalogTitle title="naroo o oooo" likes="10m" />
        <CatalogTitle title="naroo o oooo" likes="10m" />
        <CatalogTitle title="naroo o oooo" likes="10m" />
        <CatalogTitle title="naroo o oooo" likes="10m" />
        <CatalogTitle title="naroo o oooo" likes="10m" />
        <CatalogTitle title="naroo o oooo" likes="10m" />
      </Grid>
      <Grid item xs>
        <Box sx={CatalogPageStyle.filters}>
          <Box>
            <Typography variant="subtitle1" gutterBottom>
              Title
            </Typography>
            <Box sx={{m: 2, mt: 1}}>
              <FromToInput />
            </Box>
          </Box>
          <Box>
            <Typography variant="subtitle1" gutterBottom>
              Title
            </Typography>
            <Box sx={{m: 2, mt: 1}}>
              <TitleType />
            </Box>
          </Box>
          <Box>
            <Typography variant="subtitle1" gutterBottom>
              Title
            </Typography>
            <Box sx={{m: 2, mt: 1}}>
              <Genres />
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}