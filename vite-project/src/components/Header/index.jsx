// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";

// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
// import Face2TwoToneIcon from "@mui/icons-material/Face2TwoTone";
// import { NavLink } from "react-router-dom";
// const pages = ["Home", "About", "Contact", "Blog"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

// function Header() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <Face2TwoToneIcon
//             sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
//           />
//           <Typography
//             variant="h8"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: "none", md: "flex" },
//               fontFamily: "monospace",
//               fontWeight: 700,
//               letterSpacing: ".3rem",
//               color: "inherit",
//               textDecoration: "none",
//             }}
//           >
//             TEAM BLOG
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: "bottom",
//                 horizontal: "left",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "left",
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: "block", md: "none" },
//               }}
//             >
//               <MenuItem key="home" onClick={handleCloseNavMenu}>
//                 <Typography textAlign="center">Home</Typography>
//               </MenuItem>
//               <MenuItem key="home" onClick={handleCloseNavMenu}>
//                 <Typography textAlign="center">Users</Typography>
//               </MenuItem>
//               <MenuItem key="home" onClick={handleCloseNavMenu}>
//                 <Typography textAlign="center">Blog</Typography>
//               </MenuItem>
//             </Menu>
//           </Box>

//           <Face2TwoToneIcon
//             sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
//           />
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: "flex", md: "none" },
//               flexGrow: 1,
//               fontFamily: "monospace",
//               fontWeight: 700,
//               letterSpacing: ".3rem",
//               color: "inherit",
//               textDecoration: "none",
//             }}
//           >
//             BLOG
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: 'none", md:"flex"' } }}>
//             <NavLink to="/">
//               <Typography variant="button">Home</Typography>
//             </NavLink>
//             &nbsp;&nbsp;&nbsp;
//             <NavLink to="/users">
//               <Typography variant='button"'>Users</Typography>
//             </NavLink>
//             &nbsp;&nbsp;&nbsp;
//             <NavLink to="/">
//               Blog
//               <Typography variant="button"></Typography>
//             </NavLink>
//             &nbsp;&nbsp;&nbsp;
//           </Box>

//           <Box sx={{ flexGlow: 0 }}>
//             <Tooltip title="Open Setting">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: "45px" }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
// export default Header;

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { NavLink, Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import Logo from "../../images/logo.png";
import ThemeSwitch from "../../components/ThemeSwitch";

const LogoLink = styled(Link)(() => ({
  display: "flex",
  alignItems: "center",
  color: "inherit",
  textDecoration: "none",
  flexGrow: 1,
}));

const LogoImg = styled("img")(() => ({
  width: 50,
  height: 50,
  borderRadius: "50%",
  marginRight: 10,

  "@media (max-width: 600px)": {
    width: 40,
    height: 40,
  },
}));

const HeaderLink = styled(Button)(({ theme }) => ({
  color: "inherit",
  textDecoration: "none",
  marginLeft: theme.spacing(2),
}));

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <LogoLink component={RouterLink} to="/">
          <LogoImg src={Logo} alt="Logo" />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}
          >
            Team Blog
          </Typography>
        </LogoLink>
        <nav>
          <HeaderLink component={NavLink} to="/">
            Home
          </HeaderLink>
          <HeaderLink component={NavLink} to="/users">
            Users
          </HeaderLink>
          <HeaderLink component={NavLink} to="/">
            Blog
          </HeaderLink>
        </nav>
        <ThemeSwitch />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
