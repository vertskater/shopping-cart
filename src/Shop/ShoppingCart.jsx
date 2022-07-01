import { Container } from "@mui/system";
import { Button, Typography, IconButton } from "@mui/material";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import DeleteIcon from "@mui/icons-material/Delete";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

export default function ShoppingCart({ products, deleteProduct, handle }) {
  const [totalPrice, setTotalPrice] = useState(0);
  //const [productAmount, setProductAmount] = useState(1);
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
                    style={{ width: "80%" }}
                    src={product.image}
                    alt={product.title}
                  />
                </TableCell>
                <TableCell sx={{ width: "40%" }}>{product.title}</TableCell>
                <TableCell sx={{ width: "10%", textAlign: "center" }}>
                  {product.amount}
                  <div style={{ display: "flex", marginTop: 3 }}>
                    <Button
                      variant="outlined"
                      onClick={() => {
                        handle.decrementAmount(product);
                        handle.changeProduct(product, product.amount);
                      }}
                    >
                      <ChevronLeftIcon />
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={() => {
                        handle.incrementAmount(product);
                        handle.changeProduct(product, product.amount);
                      }}
                    >
                      <ChevronRightIcon />
                    </Button>
                  </div>
                </TableCell>
                <TableCell sx={{ width: "20%" }}>€ {product.price}</TableCell>
                <TableCell sx={{ width: "10%" }}>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => deleteProduct(product)}
                  >
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
