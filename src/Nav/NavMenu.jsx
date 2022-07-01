import * as React from "react";
import { useState, useContext } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, Outlet } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { sxLink } from "./sxNavStyle";
import { Amount } from "../Shop/CartAmount";
import ShoppingCart from "../Shop/ShoppingCart";
import MobileMenu from "./MobileMenu";

export default function NavMenu({
  window,
  handleAmount,
  addProduct,
  cartContent,
  deleteProduct,
}) {
  const amount = useContext(Amount);
  const drawerWidth = 240;
  const navItems = ["Home", "Shop"];
  const linkTargets = {
    Home: "/",
    Shop: "shop",
  };
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const [cartOpen, setCartOpen] = useState(false);
  const toggleCart = () => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setCartOpen(!cartOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBar
          component="nav"
          elevation={0}
          sx={{
            backgroundColor: "#fff",
            color: "#000",
            borderBottom: "solid black 0.3px",
            button: { color: "#101010" },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <Link to="/" style={sxLink}>
                The Cool-Store
              </Link>
            </Typography>
            <Box
              sx={{
                display: { xs: "none", sm: "block" },
                a: { fontSize: "1.2em" },
              }}
            >
              {navItems.map((item) => (
                <Button key={item} sx={{ color: "#fff" }}>
                  <Link to={linkTargets[item]} style={sxLink}>
                    {item}
                  </Link>
                </Button>
              ))}
              {amount !== 0 && (
                <Badge badgeContent={amount} color="error">
                  <Button
                    onClick={toggleCart()}
                    sx={{ backgroundColor: "#d3d3d3" }}
                  >
                    {" "}
                    <ShoppingCartIcon />
                    <Drawer
                      anchor="right"
                      open={cartOpen}
                      onClose={() => toggleCart()}
                      sx={{
                        "& .MuiDrawer-paper": {
                          boxSizing: "border-box",
                          width: "70%",
                        },
                      }}
                    >
                      <ShoppingCart
                        products={cartContent}
                        deleteProduct={deleteProduct}
                      />
                    </Drawer>
                  </Button>
                </Badge>
              )}
            </Box>
          </Toolbar>
        </AppBar>

        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            <MobileMenu handleDrawerToggle={handleDrawerToggle} />
          </Drawer>
        </Box>
      </Box>
      <Outlet context={[handleAmount, addProduct]} />
    </>
  );
}
