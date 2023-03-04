import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Stack,
  styled,
  TextField,
} from "@mui/material";
import { ButtonRegister } from "../MaterialUI-Props/Button/Button.stories";
// import { Large } from "../MaterialUI-Props/Input/Input.stories";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Input = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  width: "40%",
  padding: "0 30px",
  borderRadius: theme.shape.borderRadius,
}));

const Register = () => {
  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const navigate = useNavigate();

  const handleUsername = (inputUser) => {
    setUser(inputUser)
  };

  const handlePassword = (inputUser) => {
    setPass(inputUser)
  };

  const handleName = (inputUser) => {
    setName(inputUser)
  };

  const handleEmail = (inputUser) => {
    setEmail(inputUser)
  };

  const handleRegister = () => {
    const dataUser = {
      name: name,
      username: user,
      password: pass,
      email: email,
    };
    axios({
      method: "POST",
      url: "http://localhost:3000/user/register",
      data: dataUser,
    }).then((result) => {
      console.log(result.data)
      if (
        user === "" ||
        pass === "" ||
        name === "" ||
        email === ""
      ) {
        alert("tolong isi input field");
      } else {
        navigate('/login')
      }
    });
  };

    return (
      <Box
        display="flex"
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <Card sx={{ justifyContent: "center" }}>
          <CardHeader title="Register Page" />
          <CardContent>
            <Box sx={{ mb: 2 }}>
              <Stack direction="row">
                <Typography sx={{ width: 100 }}>Name:</Typography>
                <Input>
                  <TextField
                    size="small"
                    onChange={(data) => handleName(data.target.value)}
                  />
                </Input>
              </Stack>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Stack direction="row">
                <Typography sx={{ width: 100 }}>Username:</Typography>
                <Input>
                  <TextField
                    size="small"
                    onChange={(data) => handleUsername(data.target.value)}
                  />
                </Input>
              </Stack>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Stack direction="row">
                <Typography sx={{ width: 100 }}>Password:</Typography>
                <Input>
                  <TextField
                    size="small"
                    onChange={(data) => handlePassword(data.target.value)}
                  />
                </Input>
              </Stack>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Stack direction="row">
                <Typography sx={{ width: 100 }}>Email:</Typography>
                <Input>
                  <TextField
                    size="small"
                    onChange={(data) => handleEmail(data.target.value)}
                  />
                </Input>
              </Stack>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Link to="/login">
                <Typography sx={{ fontSize: 12 }}>
                  Already have an account? Click here to login!
                </Typography>
              </Link>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "center", marginTop: 1 }}
            >
              <ButtonRegister
                children="Register"
                variant="contained"
                onClick={() => handleRegister()}
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    );
  }


export default Register;
