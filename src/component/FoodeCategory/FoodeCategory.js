import { Box, Button, Container, Skeleton } from "@mui/material";
import { margin } from "@mui/system";
import React, { useEffect, useState } from "react";
import useMeals from "../../hooks/useMeals";
import { axiosInstance } from "../../utlis/axiosinstante";
import { ButtonTab } from "../Custom/Tab";
import FoodCart from "../FoodCart/FoodCart";
const category = ["dinner", "breakfast", "lunch"];
const FoodeCategory = () => {
  const [value, setValue] = useState(0);
  const { meals, error, loading } = useMeals(category[value]);

  return (
    <Box>
      <Container>
        <Box>
          <ButtonTab value={value} setValue={setValue} />
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
            justifyItems: "center",
            gap: "20px",
            mt: 8,
          }}
        >
          {!loading && meals?.data?.map((meal) => <FoodCart meal={meal} />)}
          {loading &&
            Array.from(new Array(6)).map((item) => (
              <Box
                sx={{
                  width: "350px",
                }}
              >
                <Skeleton
                  width={250}
                  height={250}
                  variant="circular"
                  sx={{
                    mx: "auto",
                  }}
                  animation="wave"
                />
                <Skeleton width={350} height={50} variant="text" />
                <Skeleton width={350} height={100} variant="text" />
                <Skeleton
                  sx={{ mx: "auto" }}
                  width={100}
                  height={70}
                  variant="text"
                />
              </Box>
            ))}
        </Box>
        <Box
          sx={{
            display: "grid",
            justifyItems: "center",
          }}
        >
          <Button
            sx={{
              borderRadius: "4px",
              display: "grid",
              m: 4,
              "&:hover": {
                backgroundColor: "#cdcdcd",
              },
            }}
          >
            Checkout Your Foods
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default FoodeCategory;
