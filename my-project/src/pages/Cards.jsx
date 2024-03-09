import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import CardsDetails from "./CardsDetails"; 

const Cards = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => setData(res.data));
  }, []);

  return (
    <>
      <Navbar />
      <Container maxWidth="md" sx={{ mt: 5 }}>
        <Grid container spacing={3}>
          {data.map((product) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={product.id}
              sx={{
                width: "100%",
                display: "flex",
              }}
            >
              <Card
                sx={{ width: "100%", display: "flex", flexDirection: "column" }}
                onClick={() => navigate(`/cardDetails/${product.id}`)}
              >
                <CardMedia
                  component="img"
                  height="100px"
                  image={product.image}
                  alt={product.title}
                />
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.title}
                  </Typography>
                  <Typography>{product.id}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    ${product.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                </CardContent>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/cardDetails/${product.id}`);
                  }}
                >
                  View Details
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Cards;