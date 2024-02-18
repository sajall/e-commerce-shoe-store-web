import { Box, TextField } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import {
  DividerBox,
  DontTag,
  GoogleBtnBox,
  GoogoleTag,
  HeadingBox,
  InputBox,
  InputLabelBox,
  LoginBtn,
  MainBoxLogin,
  SignUpHereTag,
  SignUpLineBox,
} from "./styled-component";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useMutation } from "@apollo/client";
import {LOGIN_USER} from '../../GraphQL/Mutation';


export const Login = () => {

  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

    const [loginUser , {error , loading , data}] = useMutation(LOGIN_USER);
    
    if (loading) return <div className="min-h-[800px]">
    <h1 className="text-2xl font-bold">LOADING....</h1>;
    </div>


    if(data){
      localStorage.setItem("token" , data.loginUser.token);
      localStorage.setItem('user', JSON.stringify(data.loginUser.user))
      navigate('/home');
      
    }

  const onSubmit = async (data) => {
    try {
        await loginUser ({
          variables: {
            email:data.email,
            password:data.password
          }
        });

        console.log('User Logged in successfully!');
      } catch (err) {
        console.error('user Login failed:', err);
      }
    }

  return (
    <>
      {
        error ?
        <div>{error.message}</div>
        : null
    }
      <MainBoxLogin>
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <HeadingBox>Login to your account</HeadingBox>
          <SignUpLineBox>
            <DontTag>Don't have an account?</DontTag>
            <Link to="/signup">
              <SignUpHereTag>Sign up here</SignUpHereTag>
            </Link>
          </SignUpLineBox>
          <GoogleBtnBox>
            <FcGoogle size={30} />
            <GoogoleTag>Continue with Google</GoogoleTag>
          </GoogleBtnBox>
          <DividerBox>OR</DividerBox>
          <InputBox>
            <InputLabelBox>Email</InputLabelBox>
            <TextField
              fullWidth
              type="text"
              {...register("email", {
                required: "email is required",
                minLength: {
                  value: 3,
                  message: "email must be at least 3 characters",
                },
              })}
              error={Boolean(errors.email)}
              helperText={errors.username?.message}
              margin="normal"
            />
            <InputLabelBox>Password</InputLabelBox>
            <TextField
              fullWidth
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              error={Boolean(errors.password)}
              helperText={errors.password?.message}
              margin="normal"
              sx={{ mt: 2 }}
            />
          </InputBox>
          <LoginBtn type="submit">Login</LoginBtn>
        </Box>
      </MainBoxLogin>
    </>
  );
};
