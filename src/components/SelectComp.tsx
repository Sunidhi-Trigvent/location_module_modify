import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface BasicSelectProps {
  startTime?: string; // Optional prop to filter timings
  onChange: (value: string) => void; // Callback to handle change
}

export default function BasicSelect({ startTime, onChange }: BasicSelectProps) {
  const [time, setTime] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    const selectedTime = event.target.value as string;
    setTime(selectedTime);
    onChange(selectedTime);
  };

  const timings = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
    "9:00 PM",
    "10:00 PM",
    "11:00 PM",
    "12:00 AM",
    "1:00 AM",
    "2:00 AM",
    "3:00 AM",
    "4:00 AM",
    "5:00 AM",
    "6:00 AM",
    "7:00 AM",
    "8:00 AM",
  ];

  // Filter timings based on the startTime
  const filteredTimings = startTime
    ? timings.slice(timings.indexOf(startTime) + 1)
    : timings;

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Time</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={time}
          label="Time"
          onChange={handleChange}
        >
          {filteredTimings.map((timeString, i) => (
            <MenuItem key={i} value={timeString}>
              {timeString}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
