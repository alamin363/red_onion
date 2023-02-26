import React, { useState } from "react";
import { Box } from "@mui/system";
import { Button, Container, Stack, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useParams } from "react-router-dom";
import useMealsById from "../../hooks/useMealsById";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { CounterBox } from "./MealDetails.style";
import ImageSlider from "../../component/ImageSlider/ImageSlider";
import { useCart } from "../Context/CardContextProvider";
const MealDetails = () => {
  const { meal } = useParams();
  const { meals, error, loading } = useMealsById(meal);
  const [quantity, setQuantity] = useState(0);
  const { setCart } = useCart();
  const addToCart = () => {
    setCart((cart) => [
      ...cart,
      {
        ...meals.data,
        quantity,
      },
    ]);
  };
  const adjustQuantity = (type) => {
    setQuantity(type === "add" ? quantity + 1 : quantity - 1);
    setCart((cart) => {
      cart?.map((item) => {
        if (item._id === meals.data?._id) {
          return {
            ...item,
            quantity: type === "add" ? item.quantity + 1 : item.quantity - 1,
          };
        }
        return item;
      });
    });
  };
  return (
    <Box>
      <Container>
        <Box
          sx={{
            my: 5,
            gap: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Mile details wil go here */}
          <Box sx={{ flex: 1 }}>
            <Stack spacing={4}>
              <Typography variant="h4" fontWeight={600}>
                {meals?.data?.title}
              </Typography>
              <Typography
                variant="body"
                color="primary.grayText"
                sx={{ width: 450 }}
              >
                {meals?.data?.description}
              </Typography>
              {/* price styling */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  // justifyContent: "center",
                }}
              >
                <Typography variant="h4" fontWeight={600}>
                  ${meals?.data?.price}
                </Typography>
                {/*  */}

                <CounterBox>
                  <RemoveIcon onClick={() => adjustQuantity("remove")} />
                  <Typography variant="h5" sx={{ width: 20 }} fontWeight={600}>
                    {quantity}
                  </Typography>
                  <AddIcon onClick={() => adjustQuantity("add")} />
                </CounterBox>
              </Box>
              <Button
                startIcon={<ShoppingCartOutlinedIcon />}
                sx={{
                  width: ["100%", "100%", "40%"],
                }}
                onClick={addToCart}
              >
                Add
              </Button>
            </Stack>
            {/* slider ---- */}
            <Box sx={{ mt: 10 }}>
              <ImageSlider images={meals?.data?.images} />
            </Box>
          </Box>
          {/* img go here */}
          <Box sx={{ flex: 1 }}>
            <img
              src={meals?.data?.defaultImage}
              alt="mail"
              style={{
                maxWidth: "100%",
                width: "500px",
                Margin: "0 auto",
                display: "block",
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default MealDetails;
