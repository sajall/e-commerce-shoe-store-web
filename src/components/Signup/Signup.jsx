
import { Box, Button, Divider, Typography } from "@mui/material";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { CiCircleCheck } from "react-icons/ci";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AlertBox, AlertBoxParagraph, AlertBoxTage, ArrowBox, ButtonBox, CancelAndSaveBtn, EmailMainBox, InputLable, MailBox, MainInputCityBox, MainZipCodeBox, UserTextField } from "./styled-component";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";

import {  toast } from 'react-toastify';
import { SIGNUP_USER } from "../../GraphQL/Mutation";

export const SignUp = () => {

      const navigate = useNavigate()
    const {
      register,
      handleSubmit,
    } = useForm();
    const [signupUser ,{loading ,error}] = useMutation(SIGNUP_USER);
    if(loading) return "loading";








  const saveData = async (data) => {
    console.log(data.email , 'this is form data');
    try {
      await signupUser({
        variables: {
          name:data.name,
          email:data.email,
          password:data.password,
          streetAddress:data.streetAddress,
          city:data.city,
          state:data.state,
          country:data.country,
          postalCode:data.postalCode
        }
      });
      console.log('User created successfully!');
      navigate('/login')
    } catch (err) {
      console.error('Failed to create user:', err);
    }
  };





  return (
    <>
    {
        error ?
        <div>{error.message}</div>
        : null
    }
      <Box>
        <Box
          component="form"
          onSubmit={handleSubmit(saveData)}
          sx={{
            padding: "4rem",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            backgroundColor: "white",
            "& fieldset": { border: 'none' },
          }}
        >
          <Typography
            variant="h5"
            component="div"
            sx={{
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            Register
            <IoIosInformationCircleOutline size={18} />

          </Typography>
          <Divider sx={{ marginTop: "12px" }} />
          <Box style={{ marginTop: "17px", padding: '12px 0px' }}>
            <InputLable>First Name</InputLable>
            <UserTextField
              fullWidth
              {...register("name", {
                required: "Username is required",
                minLength: {
                  value: 3,
                  message: "Username must be at least 3 characters",
                },
              })}
            />
            <InputLable>password</InputLable>
            <UserTextField
              fullWidth
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              sx={{ mt: 2 }}
            />
            <InputLable>Email</InputLable>
            <EmailMainBox>
              <MailBox>
                <MdOutlineMail size={19} />
              </MailBox>
              <UserTextField
                fullWidth
                placeholder="example@gmail.com"
                {...register("email", {
                  required: "Email is required",
                })}
              />
            </EmailMainBox>
            <InputLable>Street Address</InputLable>
            <UserTextField
              fullWidth
              {...register("streetAddress", {
                required: "Address is required",
              })}
            />
            <InputLable>City</InputLable>
            <MainInputCityBox>
              <UserTextField
                fullWidth
                placeholder="Log Angeles"
                {...register("city", {
                  required: "City is required",
                })}
              />
              <ArrowBox>
                <IoIosArrowUp size={14} />
                <IoIosArrowDown size={14} />
              </ArrowBox>
            </MainInputCityBox>
            <InputLable>State/Province</InputLable>
            <UserTextField
              fullWidth
              placeholder="California"
              {...register("state", {
                required: "StateProvince is required",
              })}
            />
            <InputLable>Country</InputLable>
            <UserTextField
              fullWidth
              placeholder="United States"
              {...register("country", {
                required: "Country is required",
              })}
            />
            <MainZipCodeBox>
              ZIP/Postal Code
              <IoIosInformationCircleOutline size={18} />
            </MainZipCodeBox>
            <UserTextField
              fullWidth
              placeholder="8675"
              {...register("postalCode", {
                required: "ZIP/Postal Code is required",
              })}
            />
            <AlertBox>
              <AlertBoxTage>Alerts</AlertBoxTage>
              <AlertBoxParagraph>Get updates of any new activity or features. Turn on/off your preferences</AlertBoxParagraph>
            </AlertBox>
            <ButtonBox>
              <CiCircleCheck size={17} strokeWidth='1' color='#17d781' marginTop='1rem' />
              <CancelAndSaveBtn
                type="submit"
              >
                Cancel
              </CancelAndSaveBtn>
              <CancelAndSaveBtn
                type="submit"
                savebtn={true}
              >
                Save
              </CancelAndSaveBtn>
            </ButtonBox>
          </Box>
        </Box>
      </Box >
    </>
  );
};
