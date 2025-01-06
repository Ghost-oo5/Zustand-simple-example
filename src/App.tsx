import { Container, Typography } from "@mui/material";
import Addtaskform from "./components/Add-task-form";
import Tasklist from "./components/Task-list";

const App = () => {
  
  return (
    <Container>
      <Typography variant="h1" pb={2}>
        Task Tracker
      </Typography>
      <Addtaskform/>
      <Tasklist/>
    </Container>
  )
}

export default App