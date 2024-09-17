import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BoxBasic from "./BoxComp";

export default function OutlinedCard({
  locationName,
  handleRemove,
  handleUpdate,
}: any) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <BoxBasic
            locationName={locationName}
            handleRemove={handleRemove}
            handleUpdate={handleUpdate}
          />
        </CardContent>
      </Card>
    </Box>
  );
}
