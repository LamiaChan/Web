import { ReactComponent as Logo } from '../../assets/logo_colored.svg';
import { useTheme } from '@mui/material/styles';
import { useStore } from '../../store/hooks';
import { useEffect, useState, Fragment } from 'react';
import CloseButton from '../../components/CloseButton';
import { SingUp } from '../../components/SingUp';
import { SingIn } from '../../components/SingIn';
import { Grid, Stack, Container, Box, Typography, Button, useMediaQuery, Modal } from "@mui/material";
import MangaCovers from '../../assets/manga_covers.png';
import { useNavigate } from 'react-router-dom';
import './GuestPage.css';

function MangaCoversTemplate(props) {
  const [xs, setXs] = useState(6);

  useEffect(() => {
    if (props.isDesktopBig) {
      setXs(6);
    } else if (props.isDesktopSmall) {
      setXs(6);
    } else if (props.isLaptop) {
      setXs(4);
    } else if (props.isTablet || props.isMobile) {
      setXs(0);
    }
  }, [props.isDesktopBig, props.isDesktopSmall, props.isLaptop, props.isTablet, props.isMobile])

  return (
    <Grid item xs={xs}>
      <Box className='manga_covers_box' sx={{ 
        height: '100%', 
        background: `url(${MangaCovers})`, 
        backgroundColor: 'transparent',
        }}
      />
    </Grid>
  );
};

function SingTemplate(props) {
  const userStore = useStore("userStore");
  const [xs, setXs] = useState(6);
  const [logoWidth, setLogoWidth] = useState(531);
  const [logoHeight, setLogoHeight] = useState(120);
  const [typographyMaxWidth, setTypographyMaxWidth] = useState('sm');
  const [typographyVariant, setTypographyVariant] = useState('h2');
  const [stackSpacing, setStackSpacing] = useState(2);
  const [modalSize, setModalSize] = useState(400);
  const [modalAnimationClass, setModalAnimationClass] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [singUpClicked, setSingUpClicked] = useState(null);
  const navigate = useNavigate();
  
  const asGuest = () => {
    userStore.setAsGuest(true);
    navigate("/");
  };

  const handleModalOpen = (isSingUp) => {
    setSingUpClicked(isSingUp);
    setModalAnimationClass('animate__fadeIn');
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalAnimationClass('animate__fadeOut');
    setTimeout(() => {
      setModalOpen(false);
      setSingUpClicked(null);
    }, 500);
  };

  useEffect(() => {
    if (props.isDesktopBig) {
      setXs(6);
      setLogoWidth(531);
      setLogoHeight(120);
      setTypographyMaxWidth('sm');
      setTypographyVariant('h2');
      setStackSpacing(2);
      setModalSize(650);
    } else if (props.isDesktopSmall) {
      setXs(6);
      setLogoWidth(531);
      setLogoHeight(120);
      setTypographyMaxWidth('sm');
      setTypographyVariant('h2');
      setStackSpacing(2);
      setModalSize(650);
    } else if (props.isLaptop) {
      setXs(8);
      setLogoWidth(531);
      setTypographyMaxWidth('xs');
      setTypographyVariant('h2');
      setStackSpacing(2);
      setModalSize(550);
    } else if (props.isTablet) {
      setXs(12);
      setLogoWidth(431);
      setLogoHeight(60);
      setTypographyMaxWidth('xs');
      setTypographyVariant('h3');
      setStackSpacing(2);
      setModalSize(400);
    } else if (props.isMobile) {
      setXs(12);
      setLogoWidth(259);
      setLogoHeight(60);
      setTypographyMaxWidth('xs');
      setTypographyVariant('h4');
      setStackSpacing(1);
      setModalSize(350);
    }
  }, [props.isDesktopBig, props.isDesktopSmall, props.isLaptop, props.isTablet, props.isMobile]);

  return (
    <Fragment>
      <Grid item xs={xs}>
        <Stack
          direction="column"
          justifyContent="space-around"
          spacing={0}
          sx={{
            height: '100%'
          }}
        >
          <Container maxWidth={'sm'}>
            <Logo 
              style={{marginLeft: 'auto', marginRight: 'auto', display: 'block'}}
              width={logoWidth} 
              height={logoHeight} 
            />
          </Container>
          <Container maxWidth={typographyMaxWidth}>
            <Typography 
              variant={typographyVariant} 
              gutterBottom 
              align="center"
            >
              Chapters on time<br/>&
              Fresh Content
            </Typography>
          </Container>
          <Container maxWidth={'sm'}>
            <Stack spacing={stackSpacing}>
              <Button onClick={() => handleModalOpen(true)} variant="contained">Sign up</Button>
              <Button onClick={() => handleModalOpen(false)} variant="outlined">Sign in</Button>
              <Button onClick={() => asGuest()} variant="outlined">Continue as guest</Button>
            </Stack>
          </Container>
        </Stack>
      </Grid>
      <Modal
        open={modalOpen}
        aria-labelledby="SingUp SingIn Modal"
        aria-describedby="Lamia Chan SingUp SingIn Modal"
      >
        <Box 
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: modalSize,
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.default',
            padding: '15px',
            border: '1px',
            borderRadius: '10px'
          }}
          className={`animate__animated ${modalAnimationClass}`}
        >
          <CloseButton 
            style={{position: 'absolute', top: 0, right: 0}} 
            onClickHandler={handleModalClose}
          />
          {singUpClicked
            ? <SingUp />
            : <SingIn />
          }
        </Box>
      </Modal>
    </Fragment>
  );

};

export function GuestPage(props) {
  const theme = useTheme();

  const desktopBig = useMediaQuery(theme.breakpoints.up('xl'));
  const desktopSmall = useMediaQuery(theme.breakpoints.between('lg', 'xl'));
  const laptop = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const tablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const mobile = useMediaQuery(theme.breakpoints.between('xs', 'sm'));

  return (
    <Grid container spacing={0} sx={{ height: '100vh' }}>
      <MangaCoversTemplate
        isDesktopBig={desktopBig}
        isDesktopSmall={desktopSmall}
        isLaptop={laptop}
        isTablet={tablet}
        isMobile={mobile}
      />
      <SingTemplate
        isDesktopBig={desktopBig}
        isDesktopSmall={desktopSmall}
        isLaptop={laptop}
        isTablet={tablet}
        isMobile={mobile}
      />
    </Grid>
  );
};