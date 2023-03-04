import React, {useState} from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Stack,
  TextField,
} from "@mui/material";
import { ButtonLogin } from "../MaterialUI-Props/Button/Button.stories";
// import { Small } from "../MaterialUI-Props/Input/Input.stories";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")

  const handleUsername = (inputUser) => {
    setUser(inputUser)
  };

  const handlePassword = (inputPass) => {
    setPass(inputPass)
  };


  const handleLogin = () => {
    const dataUser = {
      username: user,
      password: pass,
    };
    console.log(dataUser)

    axios({
      method: "POST",
      url: "http://localhost:3000/user/login",
      data: dataUser,
    }).then((result) => {
      console.log(result.data);
      if (user === "" || pass === "") {
        alert("mohon mengisi data pengguna");
      } else if (result.data === null) {
        alert("data yang diisi tidak sesuai");
      } else {
        navigate("/home")
      }
    });
  };

    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 15,
        }}
      >
        <Card sx={{ justifyContent: "center" }}>
          <CardHeader title="Login Page" />
          <CardContent>
            <Box sx={{ mb: 2 }}>
              <Stack direction="row">
                <Typography sx={{ width: 100 }}>Username:</Typography>
                {/* <Small onChange={(user) => {
                    this.handlePassword(user.target.value)
                  }}/> */}
                <TextField
                  size="small"
                  onChange={(user) => {
                    handleUsername(user.target.value);
                  }}
                />
              </Stack>
            </Box>
            <Box>
              <Stack direction="row">
                <Typography sx={{ width: 100 }}>Password:</Typography>
                {/* <Small onChange={(pass) => {
                    this.handleUsername(pass.target.value)
                  }}/> */}
                <TextField
                  size="small"
                  onChange={(pass) => {
                    handlePassword(pass.target.value);
                  }}
                />
              </Stack>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "center", marginTop: 4 }}
            >
              <Link to="/register">
                <Typography sx={{ fontSize: 12 }}>
                  Don't have an account? Click here to register
                </Typography>
              </Link>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "center", marginTop: 1 }}
            >
              <ButtonLogin
                children="Login"
                variant="contained"
                onClick={() => handleLogin()}
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    );
  }


export default Login;
