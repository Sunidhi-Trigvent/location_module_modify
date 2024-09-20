import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import BasicTable from "./TableComp";
import { useSelector } from "react-redux";

export default function BoxBasic({
  locationName,
  handleRemove,
  handleUpdate,
}: any) {
  console.log(locationName);

  const array = useSelector((state: any) => {
    console.log(state?.locationModule?.schedulingArray);
  });

  return (
    <Box component="section" sx={{ p: 2, border: "1px dashed grey" }}>
      <Typography variant="h4">Appointment Location</Typography>

      <BasicTable
        locationName={locationName}
        handleRemove={handleRemove}
        handleUpdate={handleUpdate}
      />
    </Box>
  );
}
