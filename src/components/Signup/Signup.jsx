// import React, { useState } from "react";

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     streetAddress: "",
//     city: "",
//     state: "",
//     country: "",
//     postalCode: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSignup = () => {
//     console.log(formData);
//     // You can handle the signup logic here using formData
//   };

//   const handleReset = () => {
//     setFormData({
//       name: "",
//       email: "",
//       password: "",
//       streetAddress: "",
//       city: "",
//       stateProvince: "",
//       country: "",
//       postalCode: "",
//     });
//   };

//   return (
//     <form>
//       <div>
//         <label>Name:</label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//         />
//       </div>

//       <div>
//         <label>Email:</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//       </div>

//       <div>
//         <label>Password:</label>
//         <input
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//         />
//       </div>

//       <div>
//         <label>Street Address:</label>
//         <input
//           type="text"
//           name="streetAddress"
//           value={formData.streetAddress}
//           onChange={handleChange}
//         />
//       </div>

//       <div>
//         <label>City:</label>
//         <input
//           type="text"
//           name="city"
//           value={formData.city}
//           onChange={handleChange}
//         />
//       </div>

//       <div>
//         <label>State/Province:</label>
//         <input
//           type="text"
//           name="stateProvince"
//           value={formData.stateProvince}
//           onChange={handleChange}
//         />
//       </div>

//       <div>
//         <label>Country:</label>
//         <input
//           type="text"
//           name="country"
//           value={formData.country}
//           onChange={handleChange}
//         />
//       </div>

//       <div>
//         <label>Postal Code:</label>
//         <input
//           type="text"
//           name="postalCode"
//           value={formData.postalCode}
//           onChange={handleChange}
//         />
//       </div>

//       <div>
//         <button type="button" onClick={handleSignup}>
//           Signup
//         </button>
//         <button type="button" onClick={handleReset}>
//           Reset
//         </button>
//       </div>
//     </form>
//   );
// };

// export default Signup;



import { Box, Button, Divider, Typography } from "@mui/material";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { CiCircleCheck } from "react-icons/ci";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AlertBox, AlertBoxParagraph, AlertBoxTage, ArrowBox, ButtonBox, CancelAndSaveBtn, EmailMainBox, InputLable, MailBox, MainInputCityBox, MainZipCodeBox, UserTextField } from "./styled-component";
import { signupApi } from "../../api/auth/auth";

export const SignUp = () => {

  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {

      const res = await signupApi(data)
      console.log(res, 'data');

  };

  return (
    <>
      <Box>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            // maxWidth: "600px",
            // margin: "auto",
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
