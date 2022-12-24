import { Box } from "@mui/material";
import React from "react";
import Herosection from "../../component/HeroSection/Herosection";
import FoodeCategory from "../../component/FoodeCategory/FoodeCategory";
import { Stack } from "@mui/system";
import Features from "../../component/Future/Futeru";
const Home = () => {
  return (
    <Stack spacing={5}>
      <Herosection /> 
       <FoodeCategory />
      <Features />
    </Stack>
  );
};

export default Home;
