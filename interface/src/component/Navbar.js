import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  styled,
  Stack,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import AbcIcon from "@mui/icons-material/Abc";
import EmailIcon from "@mui/icons-material/Email";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  width: "40%",
  padding: "0 30px",
  borderRadius: theme.shape.borderRadius,
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="static" sx={{ backgroundColor: "grey" }}>
      <StyledToolbar>
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar
            alt="Remy Sharp"
            src="https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528"
            onClick={() => setOpen(true)}
          />
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Judul Aplikasi?
          </Typography>
          <Badge badgeContent={4} color="primary">
            <EmailIcon color="action" />
          </Badge>
        </Stack>
        <AbcIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Stack direction="row" spacing={3}>
          <Search spacing={2}>
            <InputBase placeholder="search..." />
          </Search>
          <Button variant="contained" sx={{ backgroundColor: "darkred" }}>
            Log out
          </Button>
        </Stack>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
