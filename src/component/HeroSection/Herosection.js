import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { HeroSectionRapper, SearchBox } from "./Hero.style";
const Herosection = () => {
  return (
    <HeroSectionRapper>
      <Container
        sx={{
          height: "100%",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "grid",
            placeItems: "center",
          }}
        >
          <Box
            sx={{
              width: "50%",
            }}
          >
            <Typography variant="h4" fontWeight="500" textAlign="center">
              Best Food Waiting For Fatima
            </Typography>
            <SearchBox>
              <input
                type="search"
                alt="Search Food"
                placeholder="Search Food"
              />
              <button>Search</button>
            </SearchBox>
          </Box>
        </Box>
      </Container>
    </HeroSectionRapper>
  );
};

export default Herosection;
