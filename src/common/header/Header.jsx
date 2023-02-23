import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import "./Header.css"
import Login from '../../screens/login/Login';

export default function Header() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const style = {

    background: '#2E3B44'
  };
  return (
    <Box sx={{ flexGrow: 4, position: 'static' }}>
      <AppBar position="static" style={{ background: '#000000' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Box sx={{ '& button': { m: 1 } }}>
            <Button variant="contained" p={2}>BOOK SHOW</Button>
            <Button onClick={handleClickOpen} style={{ background: '#ebebe0', color: 'black' }}>LOGIN</Button>
            <Button style={{ background: '#ebebe0', color: 'black' }}>LOGOUT</Button>
          </Box>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogContent>
              <Login />
            </DialogContent>
          </Dialog>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
