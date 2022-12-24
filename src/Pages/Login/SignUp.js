import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../../component/Custom/InputFilde";
import { useAuth } from "../Context/Context";
import { AuthForm } from "./Signin.style";

const SignUp = () => {
  const { RegisterWithEmailPass, user } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async ({ name, email, password }) => {
    await RegisterWithEmailPass(name, email, password, navigate);
    reset();
  };
  console.log(errors);
  if (user.loading) {
    return <h1>loading</h1>;
  }
  console.log(user.email);
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
            Sign Up
          </Typography>
          <InputField
            placeholder="user Name"
            type="text"
            {...register("name", {
              required: {
                value: true,
                message: "Please Input Your Name",
              },
            })}
            error={errors.name}
            helperText={errors.name && errors.name.message}
          />
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
            to="/login"
            style={{
              color: "#f91914",
            }}
          >
            Already have a account
          </Link>
          <Button sx={{ borderRadius: "8px" }} type="submit">
            submit
          </Button>
        </AuthForm>
      </Container>
    </Box>
  );
};

export default SignUp;
