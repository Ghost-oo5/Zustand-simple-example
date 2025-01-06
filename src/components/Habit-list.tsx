import useHabitStore from "@/store/store";
import { Box, Button, Grid2, Paper, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from '@mui/icons-material/Delete';
const Habitlist = () => {
  const { habits, removeHabit } = useHabitStore();
  const today = new Date().toISOString().split("T")[0];
  return (
    <Box>
      {habits.map((item) => (
        <Paper key={item.id} sx={{ my: 2, p: 2 }}>
          <Grid2 container alignItems={"center"}>
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <Typography variant="h6">{item.name}</Typography>
              <Typography variant="body2" color="secondary">
                {item.frequency}
              </Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
                <Button
                  variant="contained"
                  color={
                    item.completedDates.includes(today) ? "success" : "primary"
                  }
                  startIcon={<CheckCircleIcon />}
                >
                  {item.completedDates.includes(today)
                    ? "Completed"
                    : "Mark as Complete"}
                </Button>
                <Button variant="outlined" color="warning" startIcon={<DeleteIcon/>} onClick={()=>removeHabit(item.id)}>
                  Remove
                </Button>
              </Box>
            </Grid2>
          </Grid2>
        </Paper>
      ))}
    </Box>
  );
};

export default Habitlist;
