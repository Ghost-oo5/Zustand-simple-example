import { Container, Typography } from "@mui/material";
import Addtaskform from "./components/Add-task-form";
import Tasklist from "./components/Task-list";

const App = () => {
  
  return (
    <Container >
      <Typography align="center" mt={5} variant="h2" pb={2}>
        Task Tracker
      </Typography>
      <Addtaskform/>
      <Tasklist/>
    </Container>
  )
}

export default App