import { Box, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { useNavigate } from "react-router-dom";

export function BasicTitle(props) {
  const { title = null } = props;
  const { likes = null } = props;
  const { href = null } = props;
  const { imgUrl = "https://mangalib.me/uploads/cover/naruto-digital-colored-comics/cover/fk3SoTZyNAHe_250x350.jpg" } = props;
  const { containerStyle = title && likes ? {mr: 5, ml: 5, mt: 2, mb: 2, cursor: 'pointer'} : {m: 5, cursor: 'pointer'}} = props;
  const { titleStyle } = props;
  const { likesStyle } = props;
  const { imgStyle = {width: '160px', height: '250px'}} = props;

  const navigate = useNavigate();

  return (
    <Box 
      sx={containerStyle}
      onClick={() => navigate(href)}
    >
      {title &&
        <Typography variant="subtitle1" sx={titleStyle}>
          {title}
        </Typography>
      }
      <img 
        style={imgStyle} 
        src={imgUrl} 
        alt="alt"
      />
      {likes &&
        <Typography variant="subtitle1" sx={likesStyle}>
          {likes}
        </Typography>
      }
    </Box>
  )
}

export function FeedUpdateBox(props) {
  return (
    <Box sx={{
      display: 'flex', 
      justifyContent: 'space-between', 
      backgroundColor: '#524F4F', 
      borderRadius: '4px', 
      p: 0.5}}
    >
      <Typography variant="body1" gutterBottom sx={{fontSize: '12px'}}>
        {props.title}
      </Typography>
      <Typography variant="body1" gutterBottom sx={{fontSize: '12px'}}>
        {props.date}
      </Typography>
    </Box>
  )
}

export function FeedTitle(props) {

  const FeedTitleStyle = {
    Container: {
      mt: 3,
      mb: 3,
      ml: 'auto',
      mr: 'auto',
      display: "flex",
      justifyContent: "start",
      width: "95%",
      cursor: "pointer",
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
      ml: 3,
      width: '90%'
    },
    Border: {
      border: '1px solid rgba(255, 255, 255, 0.69)',
      height: '1px',
      width: '90%',
      ml: 'auto',
      mr: 'auto',
      mt: 1,
      mb: 3
    }
  }

  return (
    <>
    <Box sx={FeedTitleStyle.Container}>
      <img 
        style={FeedTitleStyle.Img} 
        src="https://mangalib.me/uploads/cover/naruto-digital-colored-comics/cover/fk3SoTZyNAHe_250x350.jpg" 
        alt="alt"
      />
      {/* <BasicTitle 
        containerStyle={{}}
        imgStyle={FeedTitleStyle.Img}
      /> */}
      <Box sx={FeedTitleStyle.Info}>
        <Typography variant="body1" gutterBottom>
          {props.title}
          Манускрипт ниндзя: Демоническое перерождение
        </Typography>
        <Typography variant="body1" gutterBottom sx={FeedTitleStyle.subTitle}>
          {props.subtitle}
          Juu ~Ninpou Makai Tenshou~
        </Typography>
        <Stack spacing={1}>
          <FeedUpdateBox
            title="New Chapter 1"
            date="Today"
          />

          <FeedUpdateBox
            title="New Chapter 1"
            date="Today"
          />

          <FeedUpdateBox
            title="New Chapter 1"
            date="Today"
          />
        </Stack>
      </Box>
    </Box>
    <Box sx={FeedTitleStyle.Border} />
    </>
  )
}

export function GeneratedTitle(props) {
  const navigate = useNavigate();
  const { href = null } = props;
  const { title = "少年 Сёнэн" } = props;
  const { imgUrl = 'https://mangalib.me/uploads/cover/naruto-digital-colored-comics/cover/fk3SoTZyNAHe_250x350.jpg' } = props;

  const ContainerStyle = { 
    backgroundColor: 'rgba(49, 49, 49, 0.92)',
    borderRadius: '8px',
    width: '160px', 
    height: '250px',
    display: 'flex',
    justifyContent: 'center',
    cursor: 'pointer',
  }

  const ImgStyle = {
    backdropFilter: 'blur(10px)',
    background: `url(${imgUrl})`,
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
    <Box sx={ImgStyle} onClick={() => navigate(href)}>
      <Box sx={ContainerStyle}>
        <Typography variant="h4" gutterBottom sx={TextStyle}>
          {title}
        </Typography>
      </Box>
    </Box>  
  )
}

export function CatalogTitle(props) {
  const { title = null } = props;
  const { likes = null } = props;

  return (
    <BasicTitle 
      title={title}
      likes={likes}
      imgStyle={{borderRadius: '5px', width: '160px', height: '250px'}}
      containerStyle={{m: 2}}
    />
  )
} 