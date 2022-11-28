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

export function FeedTitle(props) {

  const FeedTitleStyle = {
    Container: {
      m: 2,
      display: "flex",
      justifyContent: "start",
      width: "100%",
    },
    Img: {
      width: '115px',
      height: '180px',
      borderRadius: '5px'
    },
    title: {

    },
    subTitle: {
      color: 'rgba(255, 255, 255, 0.63)'
    },
    Info: {
      ml: 3
    }
  }

  return (
    <Box sx={FeedTitleStyle.Container}>
      <img 
        style={FeedTitleStyle.Img} 
        src="https://mangalib.me/uploads/cover/naruto-digital-colored-comics/cover/fk3SoTZyNAHe_250x350.jpg" 
        alt="alt"
      />
      <Box sx={FeedTitleStyle.Info}>
        <Typography variant="body1" gutterBottom>
          {props.title}
          Манускрипт ниндзя: Демоническое перерождение
        </Typography>
        <Typography variant="body1" gutterBottom sx={FeedTitleStyle.subTitle}>
          {props.title}
          Juu ~Ninpou Makai Tenshou~
        </Typography>
      </Box>
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