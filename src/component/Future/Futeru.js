import {
  DirectionsBus,
  LocalShipping,
  Notifications,
} from "@mui/icons-material";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import FutureCard from "./FuteruCard";

const FeaturesCardData = [
  {
    title: "fast delivery",
    description:
      "Red is a simple service to order food from a variety of restaurant's online. Enjoy different cuisines and flavors delivered to your door stop. ",
    image: "https://i.ibb.co/9YjvxZq/architecture-building-city-2047397.png",
    icon: DirectionsBus,
  },
  {
    title: "Home delivery",
    description:
      "Red is a simple service to order food from a variety of restaurant's online. Enjoy different cuisines and flavors delivered to your door stop. ",
    image: "https://i.ibb.co/gPZP42j/chef-cook-food-33614.png",
    icon: Notifications,
  },
  {
    title: "A good auto responder",
    description:
      "Red is a simple service to order food from a variety of restaurant's online. Enjoy different cuisines and flavors delivered to your door stop. ",
    image: "https://i.ibb.co/Qkp4dKD/adult-blur-blurred-background-687824.png",
    icon: LocalShipping,
  },
];
const Features = () => {
  return (
    <Box
      sx={{
        width: "100%",
        mt: 3,
      }}
    >
      <Container>
        <Typography variant="h4">Why choose us?</Typography>
        <Typography variant="body">
          Are You hungry Did you have a long and stressful day? Interested in
          getting a cheesy pizza delivered to your office or home? Then we are
          here to help
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "1rem",
            justifyContent: "center",
            alignItems: "flex-start",
            mt: 8,
          }}
        >
          {FeaturesCardData.map((future) => (
            <FutureCard future={future} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Features;
