import { Box, Button, IconButton, Stack } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Container } from "@mui/system";
import React from "react";
import { Flexbox } from "../../component/Style/FlexBox";
import logo from "../../assit/images/logo2.png";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/Context";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Logout } from "@mui/icons-material";
const Navbar = () => {
  const { user, signOutUser } = useAuth();

  const SignOut = () => {
    return signOutUser().then(res => {
      alert("log out")
    }).catch(err => alert("log out failed"))
  };
  return (
    <Container>
      <Flexbox
        justifyContent="space-between"
        sx={{
          padding: "2rem 0",
        }}
      >
        <Box to="/" component={Link}>
          <img
            src={logo}
            style={{
              width: "160px",
            }}
            alt="logo"
          />
        </Box>
        <Stack direction="row" spacing={4}>
          <IconButton>
            <ShoppingCartOutlinedIcon titleAccess="added items" />
          </IconButton>
          {user.user ? (
            <>
              <IconButton onClick={SignOut}>
                <Logout titleAccess="Log out" />
              </IconButton>
              <IconButton>
                <PersonOutlineIcon
                  titleAccess={user?.useName}
                  color="#f90f3c"
                />
              </IconButton>
            </>
          ) : (
            <>
              <Button
                sx={{ color: "#f90f3c" }}
                variant="text"
                to="/login"
                component={Link}
              >
                Sing In
              </Button>
              <Button sx={{ color: "#ffffff" }} to="/signOut" component={Link}>
                Sing Up
              </Button>
            </>
          )}
        </Stack>
      </Flexbox>
    </Container>
  );
};

export default Navbar;
