import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Alert } from '@mui/material';

const CustomSnackbar:React.FC<{ open?:boolean, setOpen:React.Dispatch<React.SetStateAction<boolean>> }> = ({open, setOpen}) => {

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
      <Snackbar
        open={open}
        autoHideDuration={2500}
        onClose={handleClose}
        message="Товар добавлен в заказ"
        action={action}
        anchorOrigin={{ vertical:'bottom', horizontal:'right' }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ fontSize:'1.5rem', width: '100%' }}>
          Товар добавлен в заказ
        </Alert>
      </Snackbar>
    </div>
  );
}
export default CustomSnackbar