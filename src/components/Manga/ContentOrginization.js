import { useState } from "react";
import { Grid, Button, Box, Typography, Stack } from "@mui/material";
import Carousel from 'react-material-ui-carousel'
import { useTheme } from '@mui/material/styles';

export function BoxWithTitleSubCol(props) {
  return (
    <Box sx={props.sx}>
      <Typography variant="h4" gutterBottom>
        {props.title}
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        {props.subtitle}
      </Typography>
      <Stack spacing={2}>
        {props.children}
      </Stack>
    </Box>
  )
}

export function PaperWithMangaRow(props) {
  const theme = useTheme();
  const [bShowAll, setShowAll] = useState(false);

  const gridStyle = {
    backgroundColor: props.withBackground ? theme.palette.background.paper : 'none', 
    borderRadius: '20px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    maxHeight: bShowAll ? 'none' : '337px',
    overflow: bShowAll ? 'visible' : 'hidden',
  }

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'right',
      }}
    >
      <Grid sx={gridStyle}>
        {props.children}
      </Grid>
      <Box sx={{
        marginLeft: 'auto', 
        marginRight: 0,
        display: props.showAllButton ? 'block': 'none',
        mt: '10px'
      }}>
        <Button 
          variant="text"
          onClick={() => setShowAll(!bShowAll)}
        >
          {bShowAll ? 'Hide' : 'Show All'}
        </Button>
      </Box>
    </Box>
  )
}

//todo: refactor this!
export function PaperWithMangaVerticalCarousel(props) {
  const theme = useTheme();
  return (
    <Carousel
      autoPlay={false}
      strictIndexing={false}
      sx={{
          backgroundColor: theme.palette.background.paper, 
          borderRadius: '20px'
      }}
    >
      {props.children}
    </Carousel>
  )
}