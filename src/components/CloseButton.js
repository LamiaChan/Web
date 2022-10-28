import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

export default function CloseButton(props) {
  return (
    <Button 
      onClick={() => props.onClickHandler()}
      sx={props.style}
    >
      <CloseIcon  />
    </Button>
  );
}