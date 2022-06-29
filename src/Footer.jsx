import { Typography } from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";

import { sxFooter } from "./Homepage/sxStyle";

export default function Footer({ link }) {
  return (
    <footer style={sxFooter}>
      <Typography
        variant="body1"
        component="span"
        sx={{
          display: "flex",
          alignItems: "center",
          a: { color: "inherit" },
          svg: { fontSize: "1em", mr: 1 },
        }}
      >
        <CopyrightIcon />{" "}
        <a href={link} target="_blank">
          Christoph Mitterwallner
        </a>{" "}
        | A Project from theodinproject.com
      </Typography>
    </footer>
  );
}
