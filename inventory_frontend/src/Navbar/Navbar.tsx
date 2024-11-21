import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';


export const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
      };

      const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      };

    return(
      <AppBar sx={{height:64}}>
      <Container maxWidth={false}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >

              <MenuItem key={"admin employees"} onClick={handleCloseNavMenu}>
                <Typography sx={{ textAlign: 'center' }}>{"empleados"}</Typography>
              </MenuItem>

                <MenuItem key={"login"} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{"login"}</Typography>
                </MenuItem>
                <MenuItem key={"register"} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{"register"}</Typography>
                </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link to={'/employees'}>
              <Button
                key="employees"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                empleados
              </Button>
              </Link>
          </Box>

          <Box sx={{width:"min-content", display:{ xs: 'none', md: 'flex' }}}>
            <Link to={'/login'}>
            <Button
              key="login"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              login
            </Button>
              </Link>
            <Link to={'/register'}>
            <Button
              key="register"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              register
            </Button>
              </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    )
}