import React from 'react'
import './Input.css'
import { TextField } from "@mui/material";

function Input(props) {
    const {size = "small"} = props
  return (
    <TextField size={`${size}`} />
  )
}

export default Input