import { Paper, Container, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import BestSelling from "./BestSelling";
import Footer from "../Footer";
import Header from "../Header";

export default function Home() {
  const link = "https://github.com/vertskater/shopping-cart";
  const headerData = {
    height: 100,
    bgImg: "background.jpg",
    headerText: "Welcome to Cool-Store",
    haveBtn: true,
    btnText: "Shop Now",
    btnIcon: <ShoppingCartIcon />,
  };
  return (
    <>
      <Header headerData={headerData} />
      <Container /*  disableGutters={true} */>
        <Paper elevation={0}>
          <Typography
            variant="h3"
            component={"h2"}
            sx={{ pt: 10, pb: 10, textAlign: "center" }}
          >
            Our best rated Products
          </Typography>
          <BestSelling />
        </Paper>
      </Container>
      <Footer link={link} />
    </>
  );
}
