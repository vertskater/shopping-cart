import { Container, textAlign } from "@mui/system";
import { Button, Typography, IconButton } from "@mui/material";
import { useState, useEffect } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ShoppingCart({ products }) {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let price = 0;
    products.forEach((item) => {
      price += parseFloat(item.price, 10);
    });
    setTotalPrice(price);
  }, [totalPrice, products]);

  return (
    <Container sx={{ pt: 4 }}>
      <Typography variant="h4" component="h3">
        Your Cart
      </Typography>
      <TableContainer variant="container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Price in €</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell sx={{ width: "20%" }}>
                  <img
                    style={{ width: "100%" }}
                    src={product.image}
                    alt={product.title}
                  />
                </TableCell>
                <TableCell sx={{ width: "40%" }}>{product.title}</TableCell>
                <TableCell sx={{ width: "10%" }}>{1}</TableCell>
                <TableCell sx={{ width: "20%" }}>€ {product.price}</TableCell>
                <TableCell sx={{ width: "10%" }}>
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div
        style={{
          height: "200px",
          marginTop: "20px",
          marginRight: "50px",
          marginBottom: "100px",
          textAlign: "right",
        }}
      >
        <Typography
          variant="h4"
          component="h6"
          sx={{ display: "block", mb: 5 }}
        >
          <span style={{ fontSize: "0.6em" }}>Total price:</span> € {totalPrice}
        </Typography>
        <Button
          variant="contained"
          sx={{ p: 1.5, width: "40%" }}
          endIcon={<ShoppingCartCheckoutIcon />}
        >
          Checkout
        </Button>
      </div>
    </Container>
  );
}
