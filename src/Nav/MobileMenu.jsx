import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";

import { sxLink } from "./sxNavStyle";

export default function MobileMenu({ handleDrawerToggle }) {
  const drawerWidth = 240;
  const navItems = ["Home", "Shop"];
  const linkTargets = {
    Home: "/",
    Shop: "shop",
  };
  return (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Cool-Store
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{
                justifyContent: "center",
                a: sxLink,
              }}
            >
              <Link to={linkTargets[item]}>
                <ListItemText primary={item} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
