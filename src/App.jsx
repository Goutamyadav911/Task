import StoryList from "./StoryList";
import { CssBaseline, Container } from "@mui/material";

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ bgcolor: "#0a0a23", minHeight: "100vh", py: 4 }}>
        <StoryList />
      </Container>
    </>
  );
}

export default App;
