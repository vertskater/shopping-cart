import {
  Grid,
  Paper,
  Typography,
  Button,
  Container,
  TextField,
  Stack,
  Autocomplete,
} from "@mui/material";
import sx from "mui-sx";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

import useProducts from "../useProducts";
import Header from "../Header";
import Footer from "../Footer";
import { sxParagraph, sxPrice, sxCard, sxContainer } from "../Homepage/sxStyle";
import { useState } from "react";

export default function Shop() {
  const [, allProducts] = useProducts();
  const [filter, setFilter] = useState("");
  const link = "https://github.com/vertskater/shopping-cart";
  const headerData = {
    height: 40,
    bgImg: "background.jpg",
    headerText: "Welcome to Cool-Store",
    haveBtn: false,
  };
  return (
    <>
      <Header headerData={headerData} />
      <Container>
        <Stack spacing={2} sx={{ width: 500, m: "50px auto" }}>
          <Autocomplete
            freeSolo
            options={allProducts.map((product) => product.title)}
            onChange={(e, value) => (value ? setFilter(value) : setFilter(""))}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search Product"
                onChange={(e) => {
                  setFilter(e.target.value);
                }}
              />
            )}
          ></Autocomplete>
        </Stack>
        <Grid
          container
          spacing={3}
          justifyContent="center"
          sx={sx(sxContainer)}
        >
          {allProducts
            .filter((item) => {
              return item.title.toLowerCase().includes(filter.toLowerCase());
            })
            .map((item) => {
              return (
                <Grid key={item.id} item xs={12} sm={6} md={3} zeroMinWidth>
                  <Paper elevation={4} sx={sx(sxCard)}>
                    <Link
                      to={`${item.id}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {" "}
                      <div>
                        <img src={item.image} alt={item.name} />
                        <Typography
                          sx={sx(sxParagraph)}
                          variant="subtitle1"
                          component="h6"
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          sx={sx(sxPrice)}
                          variant="h6"
                          component="span"
                        >
                          € {item.price}
                        </Typography>
                      </div>
                    </Link>
                    <div
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <Button
                        sx={{ mt: 2, mx: 0, justifyContent: "flex-end" }}
                        variant="contained"
                        endIcon={<ShoppingCartIcon />}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </Paper>
                </Grid>
              );
            })}
        </Grid>
      </Container>
      <Footer link={link} />
    </>
  );
}
