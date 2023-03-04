import React from "react";
import "./Button.css";
import { Button } from "@mui/material";

function Tombol(props) {
  const { name, children, ...rest } = props;
  return (
    <Button className={`button ${name}`} {...rest}>
      {children}
    </Button>
  );
}

export default Tombol;
