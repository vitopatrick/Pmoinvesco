import * as React from "react";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Toolbar,
  CssBaseline,
  useTheme,
  Divider,
} from "@mui/material";
import {
  MdMenu,
  MdPowerOff,
  MdChevronLeft,
  MdChevronRight,
} from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { links } from "./sidebar";
import { useNavigate,Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { AppBar, Drawer, DrawerHeader } from "./styles";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);
  const theme = useTheme();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    signOut(auth);
    navigate("/");
  };

  const listComponent = (
    <>
      <List>
        {links.map((link) => (
          <ListItem sx={{ my: 3 }} disablePadding>
            <ListItemButton onClick={() => navigate(link.path)}>
              <ListItemIcon>{link.icon}</ListItemIcon>
              <ListItemText primary={link.text} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton onClick={handleLogout}>
            <ListItemIcon>
              <MdPowerOff />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MdMenu />
          </IconButton>
          <Box>
            <h4 className="text-2xl uppercase font-bold">Pmoinvesco</h4>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box>
              <Link to="/account">
                <FaUserCircle size="32px" color="#f4f4f4" />
              </Link>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? <MdChevronRight /> : <MdChevronLeft />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {listComponent}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
