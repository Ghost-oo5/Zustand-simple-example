import useTaskStore from "@/store/store";
import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField
} from "@mui/material";
import Box from "@mui/material/Box";
import React, { useState } from "react";


const Addtaskform = () => {
    const {addTask} = useTaskStore();
  const [name, setName] = useState("");
  const [frequency, setFrequency] = useState<"daily" | "weekly">("daily");

  const handleSubmit=(e:React.FormEvent)=>
    {
    e.preventDefault();
    addTask(name, frequency);
    setName('')
    }
  
  return ( 
    <form onSubmit={handleSubmit}>
      <Box sx={{
        display:'flex',
        flexDirection:'column',
        gap:2
      }}>
        <TextField
          label="Task Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          fullWidth
        />
        <FormControl fullWidth>
          <InputLabel>Frequency</InputLabel>
          <Select
            value={frequency}
            label="frequency"
            onChange={(event) =>
              setFrequency(event.target.value as "daily" | "weekly")
            }
          >
            <MenuItem value={'daily'}>Daily</MenuItem>
            <MenuItem value={'weekly'}>Weekly</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" color="primary">
            Add Task
        </Button>
      </Box>
    </form>
  );
};

export default Addtaskform;
