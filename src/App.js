import Feed from "./components/Feed";
import { Box, Stack } from "@mui/system";
import NavBar from "./components/NavBar";
import RightBar from "./components/RightBar";
import SideBar from "./components/SideBar";


function App() {
  return (
    <div className="App">
      <Box>

      <NavBar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
      <SideBar />
      <Feed/>
      <RightBar />
      </Stack>
      </Box>
    </div>
  );
}

export default App;
