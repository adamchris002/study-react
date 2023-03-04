import React from "react";
import Tombol from "./Button";

export default {
  title: "Testing/Button",
  component: Tombol,
  argTypes: {
    onClick: { action: "clicked" },
  },
};

const Template = (args) => <Tombol {...args} />;

export const ButtonLogin = Template.bind({});
ButtonLogin.args = {
  name: "login",
  children: "Login",
  color: "primary",
  variant: "contained",
};

export const ButtonLogout = Template.bind({});
ButtonLogout.args = {
  name: "logout",
  children: "Logout",
  color: "error",
  variant: "contained",
};

export const ButtonDanger = Template.bind({});
ButtonDanger.args = {
  name: "danger",
  children: "Danger",
  color: "error",
  variant: "contained",
};

export const ButtonRegister = Template.bind({});
ButtonRegister.args = {
  name: "register",
  children: 'Register',
  color: "secondary",
  variant: "contained"
}
