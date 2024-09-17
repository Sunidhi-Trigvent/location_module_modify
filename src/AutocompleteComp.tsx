import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

interface OptionType {
  label: string;
  code: string;
  phone: string;
}

interface AppointmentTypeSelectProps {
  onSelect: (value: string[]) => void; // Accept array of strings
}

export default function AppointmentTypeSelect({
  onSelect,
}: AppointmentTypeSelectProps) {
  const options: OptionType[] = [
    { label: "Virtual", code: "V", phone: "" },
    { label: "Inperson", code: "I", phone: "" },
    { label: "Phone", code: "P", phone: "" },
    { label: "Text", code: "T", phone: "" },
  ];

  const handleChange = (
    event: React.SyntheticEvent,
    value: OptionType[] | null // Array of selected values
  ) => {
    onSelect(value ? value.map((option) => option.label) : []); // Pass array of labels
  };

  return (
    <Autocomplete
      id="appointment-type-select"
      sx={{ width: 300 }}
      options={options}
      autoHighlight
      multiple // Allow multiple selections
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => {
        const { key, ...optionProps } = props;
        return (
          <Box
            key={key}
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...optionProps}
          >
            <img
              loading="lazy"
              width="20"
              srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
              src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
              alt=""
            />
            {option.label} {option.phone && `+${option.phone}`}
          </Box>
        );
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose appointment type(s)"
          slotProps={{
            htmlInput: {
              ...params.inputProps,
              autoComplete: "new-password", // disable autocomplete and autofill
            },
          }}
        />
      )}
      onChange={handleChange} // Handle multiple selection
    />
  );
}
