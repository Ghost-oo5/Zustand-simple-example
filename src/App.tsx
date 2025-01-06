import { Container, Typography } from "@mui/material";
import Addhabitform from "./components/Add-habit-form";
import { Button } from "./components/ui/button"
import useHabitStore from "./store/store"
import Habitlist from "./components/Habit-list";

const App = () => {
  const store = useHabitStore();
  
  return (
    <Container>
      <Typography variant="h1" pb={2}>
        Habit Tracker
      </Typography>
      <Addhabitform/>
      <Habitlist/>
    </Container>
  )
}

export default App