import React from "react";
import Navbar from "./Navbar";

export default {
    title: "Testing/Navbar",
    component: Navbar,
    argTypes: {
        onClick: { action: "clicked" },
      },
}

const Template = (args) => <Navbar {...args} />

export const Navbar1 = Template.bind({})
Navbar1.args = {
    children: "primary",
}

