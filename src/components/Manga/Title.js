import { Box, Typography } from '@mui/material';

export function BasicTitle(props) {
  return (
    <Box sx={{m: 5}}>
      <img 
        style={{width: '160px', height: '250px'}} 
        src="https://mangalib.me/uploads/cover/naruto-digital-colored-comics/cover/fk3SoTZyNAHe_250x350.jpg" 
        alt="alt"
      />
    </Box>
  )
}

export function GeneratedTitle(props) {
  const ContainerStyle = { 
    backgroundColor: 'rgba(49, 49, 49, 0.92)',
    borderRadius: '8px',
    width: '160px', 
    height: '250px',
    display: 'flex',
    justifyContent: 'center'
  }

  const ImgStyle = {
    backdropFilter: 'blur(10px)',
    background: `url(${'https://mangalib.me/uploads/cover/naruto-digital-colored-comics/cover/fk3SoTZyNAHe_250x350.jpg'})`,
    backgroundSize: 'cover',
    width: '160px', 
    height: '250px',
    borderRadius: '10px',
    m: 5
  }

  const TextStyle = {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '700',
    textAlign: 'center',
    height: '50%',
    margin: 'auto',
  }

  return (
    <Box sx={ImgStyle}>
      <Box sx={ContainerStyle}>
        <Typography variant="h4" gutterBottom sx={TextStyle}>
          少年
          Сёнэн
        </Typography>
      </Box>
    </Box>  
  )
}