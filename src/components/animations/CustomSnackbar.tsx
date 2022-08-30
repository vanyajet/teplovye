import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Alert } from '@mui/material';
import { Link } from 'react-router-dom';

const CustomSnackbar:React.FC<{ 
  open?:boolean,
  setOpen:React.Dispatch<React.SetStateAction<boolean>>,
  vertical:"top" | "bottom",
  horizontal:"left" | "center" | "right",
  insideText:string,
  link?:string
  }> = ({open, setOpen, vertical, horizontal, insideText, link}) => {

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      {link ? 
        <Link to={link}>
          <Snackbar
          open={open}
          autoHideDuration={2500}
          onClose={handleClose}
          message={insideText}
          action={action}
          anchorOrigin={{ vertical:vertical, horizontal:horizontal }}
          >
            <Alert onClose={handleClose} severity="success" sx={{ fontSize:'1.5rem', width: '100%' }}>
              {insideText}
            </Alert>
          </Snackbar>
        </Link>
      :
      <Snackbar
        open={open}
        autoHideDuration={2500}
        onClose={handleClose}
        message={insideText}
        action={action}
        anchorOrigin={{ vertical:vertical, horizontal:horizontal }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ fontSize:'1.5rem', width: '100%' }}>
          {insideText}
        </Alert>
      </Snackbar>
      }
    </div>
  );
}
export default CustomSnackbar