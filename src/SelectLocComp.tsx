import React, { useState } from "react"; // Import React and useState
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

interface BasicSelectTwoProps {
  locationOptions: string[];
  appointmentType: any;
  onLocationChange: (location: string) => void; // Add the callback prop
}

export default function BasicSelectTwo({
  appointmentType,
  locationOptions,
  onLocationChange,
}: BasicSelectTwoProps) {
  const [location, setLocation] = useState<string>("");

  const handleChange = (event: SelectChangeEvent<string>) => {
    const newLocation = event.target.value;
    setLocation(newLocation);
    onLocationChange(newLocation); // Call the callback function to update the parent component
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
