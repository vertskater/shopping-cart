import { Paper, Typography, Button, Grid } from "@mui/material";
import sx from "mui-sx";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { sxContainer, sxCard, sxParagraph, sxPrice } from "./sxStyle";
import useProducts from "../useProducts";

export default function BestSelling() {
  const [bestSellingProducts] = useProducts();
  return (
    <Grid container spacing={3} justifyContent="center" sx={sx(sxContainer)}>
      {bestSellingProducts.map((item) => {
        return (
          <Grid key={item.id} item xs={12} sm={6} md={3} zeroMinWidth>
            <Paper elevation={4} sx={sx(sxCard)}>
              <img src={item.image} alt={item.name} />
              <Typography
                sx={sx(sxParagraph)}
                variant="subtitle1"
                component="h6"
              >
                {item.title}
              </Typography>
              <Typography sx={sx(sxPrice)} variant="h6" component="span">
                € {item.price}
              </Typography>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
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
  );
}
