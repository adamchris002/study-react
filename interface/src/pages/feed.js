import { Stack } from "@mui/material";
import Isi from "../component/Isi";
import Sidebar from "../component/Sidebar";
import Rightbar from "../component/Rightbar";
// import Navbar from "../component/Navbar";
import { Navbar1 } from "../MaterialUI-Props/Navbar/Navbar.stories";

const Feed = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Navbar1 />
      <Stack direction="row" spacing={3}>
        <Sidebar />
        <Isi />
        <Rightbar />
      </Stack>
    </>
  );
};

export default Feed;
