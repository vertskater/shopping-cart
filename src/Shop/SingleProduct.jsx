import useProducts from "../useProducts";
import { useParams } from "react-router-dom";
import { Container, Grid, Typography, Button, Rating } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import sx from "mui-sx";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

import { sxItem, sxContainer } from "./sxShopStyle";
import Header from "../Header";
import Footer from "../Footer";

export default function SingleProduct() {
  const { id } = useParams();
  const [, allProducts] = useProducts();
  const [handleAmount, addProduct] = useOutletContext();
  const headerData = {
    height: 30,
    bgImg: "background.jpg",
    headerText: "Cool-Store",
    haveBtn: false,
  };

  return (
    <>
      <Header headerData={headerData} />
      <Container>
        {allProducts
          .filter((product) => product.id === parseInt(id))
          .map((product) => {
            return (
              <Grid container key={product.id} sx={sx(sxContainer)}>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={sx(sxItem, { textAlign: "center" })}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{ width: "60%" }}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={sx(sxItem, { alignSelf: "center" })}
                >
                  <Link to="/shop" underline="hover">
                    <ArrowBackIcon sx={{ fontSize: "1em", mr: 1 }} />
                    continue shopping
                  </Link>
                  <Typography variant="h5" component="h2" sx={{ mb: 3, mt: 3 }}>
                    {product.title}
                  </Typography>
                  <Typography variant="body1" component="p" sx={{ mb: 5 }}>
                    {product.description}
                  </Typography>
                  <Typography
                    variant="h5"
                    component="span"
                    sx={{ display: "block", textAlign: "right", mb: 2 }}
                  >
                    € {product.price}
                  </Typography>
                  <Button
                    variant="contained"
                    endIcon={<ShoppingCartIcon />}
                    onClick={() => {
                      handleAmount();
                      addProduct(product);
                    }}
                  >
                    Add to shopping cart
                  </Button>
                  <div
                    style={{
                      marginTop: 20,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Rating
                      name="read-only"
                      value={product.rating.rate}
                      readOnly
                    />
                    <Typography
                      variant="body2"
                      component="span"
                      sx={{ color: "#808080" }}
                    >
                      ({product.rating.count} total votes)
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            );
          })}
      </Container>
      <Footer />
    </>
  );
}
