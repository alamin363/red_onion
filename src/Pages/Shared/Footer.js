import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assit/images/logo.png";
const Footer = () => {
  return (
    <Box
      sx={{
        mt: 10,
        display: "flex",

        backgroundColor: "#191919",
      }}
    >
      <Box to="/" sx={{ width: "45vw", mt: 10 }} component={Link}>
        <img
          src={logo}
          style={{
            width: "100px",
          }}
          alt="logo"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          mt: 10,
          mb: 10,
          justifyContent: "space-between",
          width: "45vw",
        }}
      >
        <Stack spacing={2}>
          <Link to="/">
            <Typography sx={{ color: "#fff" }} variant="body2">
              About Online food
            </Typography>
          </Link>
          <Typography sx={{ color: "#fff" }} variant="body2">
            REad our food
          </Typography>
          <Typography sx={{ color: "#fff" }} variant="body2">
            Sing up to deliver
          </Typography>
          <Typography sx={{ color: "#fff" }} variant="body2">
            Add your restaurant
          </Typography>
        </Stack>
        <Stack spacing={2}>
          <Link to="/">
            <Typography sx={{ color: "#fff" }} variant="body2">
              Get help
            </Typography>
          </Link>
          <Typography variant="body2" sx={{ color: "#fff" }}>
            Read FAQs{" "}
          </Typography>
          <Typography variant="body2" sx={{ color: "#fff" }}>
            View all cities
          </Typography>
          <Typography variant="body2" sx={{ color: "#fff" }}>
            Restaurants near me
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
