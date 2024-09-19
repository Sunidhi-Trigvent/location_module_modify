import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface BasicSelectTwoProps {
  locationOptions: string[];
  appointmentType: string[]; // Accept appointmentType as a prop
}

export default function BasicSelectTwo({
  appointmentType,
  locationOptions,
}: BasicSelectTwoProps) {
  const [location, setLocation] = React.useState<string>("");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setLocation(event.target.value);
  };

  const showLocation = appointmentType?.includes("Inperson");

  return showLocation ? (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="location-select-label">Location</InputLabel>
        <Select
          labelId="location-select-label"
          id="location-select"
          value={location}
          label="Location"
          onChange={handleChange}
        >
          {locationOptions.map((loc, index) => (
            <MenuItem key={index} value={loc}>
              {loc}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  ) : null;
}
