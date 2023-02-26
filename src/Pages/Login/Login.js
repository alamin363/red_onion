import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/Context";
import { AuthForm } from "./Signin.style";
import InputField from "../../component/Custom/InputFilde";
const Login = () => {
  const { singIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async ({ name, email, password }) => {
    await singIn();
    reset();
  };
  return (
    <Box
      sx={{
        height: "90vh",
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container>
        <AuthForm component="form" onSubmit={handleSubmit(onSubmit)}>
          <Typography variant="h3" color="primary" textAlign="center">
            Sign In
          </Typography>

          <InputField
            {...register("email", {
              required: {
                value: true,
                message: "Please provide your email",
              },
            })}
            error={errors.email}
            helperText={errors.email && errors.email.message}
            placeholder="user Email"
            type="email"
          />
          <InputField
            placeholder="user Password"
            type="password"
            {...register("password", {
              required: {
                value: true,
                message: "Please provide Your password",
              },
              minLength: {
                value: 6,
                message: "password must be at least 6 characters long",
              },
            })}
            error={errors.password}
            helperText={errors.password && errors.password.message}
          />
          <Link
            to="/signOut"
            style={{
              color: "#f91914",
            }}
          >
            Already don't have a account
          </Link>
          <Button sx={{ borderRadius: "8px" }} type="submit">
            Sign In
          </Button>
        </AuthForm>
      </Container>
    </Box>
  );
};

export default Login;
