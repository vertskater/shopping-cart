import sx from "mui-sx";
import { Paper, Typography, Button } from "@mui/material";

import { sxFlexColumn } from "./Homepage/sxStyle";
import { Link } from "react-router-dom";

export default function Header({ headerData }) {
  const backgroundImg = process.env.PUBLIC_URL + `/${headerData.bgImg}`;
  const sxBackgroundImg = {
    backgroundImage: "url(" + backgroundImg + ")",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <Paper
      elevation={0}
      sx={sx(sxFlexColumn, sxBackgroundImg, {
        width: "100vw",
        height: `${headerData.height}vh`,
      })}
    >
      <Typography
        variant="h1"
        component={"h1"}
        sx={{ textAlign: "center", fontSize: "6vw" }}
      >
        {headerData.headerText}
      </Typography>
      {headerData.haveBtn && (
        <Link to="shop" style={{ textDecoration: "none", color: "inherit" }}>
          <Button
            sx={{ m: 4, mx: 0, p: 2 }}
            variant="contained"
            endIcon={headerData.btnIcon}
          >
            {headerData.btnText}
          </Button>
        </Link>
      )}
    </Paper>
  );
}
