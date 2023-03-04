import { List, ListItem, ListItemText, Box } from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Stack } from "@mui/system";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Sidebar = () => {
  return (
    <Box flex={1} p={2}>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        justifyContent="center"
      >
        <Stack direction="row" alignItems="center" marginLeft="15px">
          <HomeIcon />
          <ListItem alignItems="center">
            <ListItemText primary="Home" />
          </ListItem>
        </Stack>
        <Stack direction="row" alignItems="center" marginLeft="15px">
          <SettingsOutlinedIcon />
          <ListItem alignItems="center">
            <ListItemText primary="Settings" />
          </ListItem>
        </Stack>
        <Stack direction="row" alignItems="center" marginLeft="15px">
          <AccountCircleIcon />
          <ListItem alignItems="center">
            <ListItemText primary="Profile" />
          </ListItem>
        </Stack>
      </List>
    </Box>
  );
};

export default Sidebar;
