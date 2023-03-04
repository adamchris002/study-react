import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={7} total={24}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              alt=""
              src="https://simply-delicious-food.com/wp-content/uploads/2022/09/Breakfast-board28.jpg"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              alt=""
              src="https://c.ndtvimg.com/2022-07/e6mofj38_breakfast_625x300_22_July_22.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              alt=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Gd5UAKcNKiXJVVuwe-QO2GYrymTeSt1Jrw6X9o_gaNz6Wbozu7_u4a_yZAqTPNZyXLc&usqp=CAU"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              alt=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjJN8ZJvx9a8pJjAOcrgMsLHM2pxngc5ghaWycGWKjZXfaBNVm9t_0PPlbga3HqUFuMvk&usqp=CAU"
            />
          </ImageListItem>
        </ImageList>
      </Box>
    </Box>
  );
};

export default Rightbar;
