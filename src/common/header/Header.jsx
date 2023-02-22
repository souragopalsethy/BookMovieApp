import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import "./Header.css"

export default function Header() {
  const style = {

    background : '#2E3B44'
};
  return (
    <Box sx={{ flexGrow: 4 }}>
      <AppBar position="static"  style={{ background: '#000000' }}>
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="primary" style={{ background: '#ebebe0' }}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
