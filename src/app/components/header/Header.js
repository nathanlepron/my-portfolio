'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useTranslations } from "next-intl";
import { Grid } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

const settings = [
  { name: "FRA", url: "/fr" },
  { name: "ENG", url: "/en" }
];

function Header({ locale }) {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const pathname = usePathname()
  const [currentPage, setCurrentPage] = React.useState(pathname);
  console.log(pathname)
  React.useEffect(() => {
    setCurrentPage(pathname);
  }, [pathname]);

  const getLinkClassName = (page) => {
    console.warn(page, currentPage)
    if (page === currentPage) {
      console.log(true)
      return 'active-link';
    }
    return '';
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const t = useTranslations('Tabs');
  const pagesKeys = ['Contact', 'About', 'Projects'];
  console.log(locale)
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Grid container spacing={0}
          direction="column">
          <Toolbar disableGutters>
            <Grid item xs={3}>
              <Link href="/">
                <Typography className="title-font"
                  variant="h6"
                  noWrap
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  {t("appname")}
                </Typography>
              </Link>
            </Grid>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
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
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pagesKeys.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{t(`${page}.name`)}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Link href="/">
              <Typography
                variant="h5"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                {t('appname')}
              </Typography>
            </Link>
            <Box
              sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center' }}
            >
              {pagesKeys.map((page) => (
                <Link
                  key={page}
                  onClick={handleCloseNavMenu}
                  href={'/' + locale + t(`${page}.link`)}
                  underline="none"
                  color="inherit"
                  
                >
                  <Button
                  className={getLinkClassName('/' + locale + t(`${page}.link`))}
                    sx={{ my: 2, color: 'white', display: 'flex', minWidth: 200, justifyContent: 'center', alignItems: 'center', '&.active-link': { color: '#83BAA0', fontWeight: 'bold' } }}
                  >
                    {t(`${page}.name`)}
                  </Button>
                </Link>
              ))}
            </Box>
            <Grid item xs={3}>
              <Box sx={{ flexGrow: 0 }} display="flex" justifyContent="flex-end">
                <Tooltip title="Change language">
                  <Button onClick={handleClick} sx={{ p: 0, color: "inherit" }}>
                    {locale === "fr" ? "FRA" : "ENG"}
                  </Button>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  {settings.map((setting) => (
                    <Link href={setting.url} key={setting.name}>
                      <MenuItem>
                        <Typography textAlign="center">{setting.name}</Typography>
                      </MenuItem>
                    </Link>
                  ))}
                </Menu>
              </Box>
            </Grid>
          </Toolbar>
        </Grid>
      </Container>
    </AppBar>
  );
}
export default Header;