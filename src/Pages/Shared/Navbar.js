import { Button, IconButton, Stack } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Container } from "@mui/system";
import React from "react";
import { Flexbox } from "../../component/Style/FlexBox";
import logo from "../../assit/images/logo2.png";
const Navbar = () => {
  return (
    <Container>
      <Flexbox
        justifyContent="space-between"
        sx={{
          padding: "2rem 0",
        }}
      >
        <img
          src={logo}
          style={{
            width: "160px",
          }}
          alt="logo"
        />
        <Stack direction="row" spacing={4}>
          <IconButton>
            <ShoppingCartOutlinedIcon />
          </IconButton>
          <Button variant="text">Sing In</Button>
          <Button sx={{color:"#ffffff"}}>Sing Up</Button>
        </Stack>
      </Flexbox>
    </Container>
  );
};

export default Navbar;
