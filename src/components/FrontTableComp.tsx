import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import BasicSelect from "./SelectComp";
import AppointmentTypeSelect from "../AutocompleteComp";
import BasicSelectTwo from "../SelectLocComp";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { IconButton } from "@mui/material";

// Define the prop types
interface Time {
  startTime: string;
  endTime: string;
}

interface Value {
  id: number;
  Time: Time;
  Session: string[];
  Location: string;
}

interface DayTable {
  day: string;
  value: Value[];
}

interface FrontBasicTableProps {
  locationName: string[];
  frontTable: DayTable[];
  setFrontTable: React.Dispatch<React.SetStateAction<DayTable[]>>;
}

export default function FrontBasicTable({
  locationName,
  frontTable,
  setFrontTable,
}: FrontBasicTableProps) {
  // Handle first time change
  const handleFirstTimeChange = (
    dayIndex: number,
    valueIndex: number,
    time: string
  ) => {
    const updatedTable = [...frontTable];
    updatedTable[dayIndex].value[valueIndex].Time.startTime = time;
    updatedTable[dayIndex].value[valueIndex].Time.endTime = ""; // Reset end time
    setFrontTable(updatedTable);
  };

  // Handle second time change
  const handleSecondTimeChange = (
    dayIndex: number,
    valueIndex: number,
    time: string
  ) => {
    const updatedTable = [...frontTable];
    updatedTable[dayIndex].value[valueIndex].Time.endTime = time;
    setFrontTable(updatedTable);
  };

  // Handle appointment type change
  const handleAppointmentTypeChange = (
    dayIndex: number,
    valueIndex: number,
    types: string[]
  ) => {
    const updatedTable = [...frontTable];
    updatedTable[dayIndex].value[valueIndex].Session = types;
    setFrontTable(updatedTable);
  };

  // Handle location change
  const handleLocationChange = (
    dayIndex: number,
    valueIndex: number,
    newLocation: string
  ) => {
    const updatedTable = [...frontTable];
    updatedTable[dayIndex].value[valueIndex].Location = newLocation; // Update the Location
    setFrontTable(updatedTable);
  };

  // Function to add a new row, with a limit of 3 rows per day
  const repeatRow = (dayIndex: number) => {
    const updatedTable = [...frontTable];
    const currentDay = updatedTable[dayIndex];

    // Add a new row if there are fewer than 3 rows for the given day
    if (currentDay.value.length < 3) {
      const newRow = {
        id: currentDay.value.length + 1, // New unique ID
        Time: { startTime: "", endTime: "" }, // Empty Time fields
        Session: [], // Empty appointment type array
        Location: "", // Empty Location
      };
      currentDay.value.push(newRow); // Add new row
      setFrontTable(updatedTable);
    }
  };

  // Function to remove a row
  const removeRow = (dayIndex: number, valueIndex: number) => {
    const updatedTable = [...frontTable];
    const currentDay = updatedTable[dayIndex];

    currentDay.value.splice(valueIndex, 1); // Remove the row at valueIndex
    setFrontTable(updatedTable);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Day</TableCell>
            <TableCell>First Time</TableCell>
            <TableCell>Second Time</TableCell>
            <TableCell>Session Type</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {frontTable.map((dayEntry, dayIndex) => (
            <React.Fragment key={dayEntry.day}>
              {dayEntry.value.map((entry, valueIndex) => (
                <TableRow key={entry.id}>
                  {/* Only show the day once (in the first row) */}
                  {valueIndex === 0 && (
                    <TableCell rowSpan={dayEntry.value.length}>
                      {dayEntry.day}
                    </TableCell>
                  )}
                  <TableCell>
                    <BasicSelect
                      onChange={(time: string) =>
                        handleFirstTimeChange(dayIndex, valueIndex, time)
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <BasicSelect
                      startTime={entry.Time.startTime}
                      onChange={(time: string) =>
                        handleSecondTimeChange(dayIndex, valueIndex, time)
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <AppointmentTypeSelect
                      setAppointmentType={(types: string[]) =>
                        handleAppointmentTypeChange(dayIndex, valueIndex, types)
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <BasicSelectTwo
                      appointmentType={entry.Session}
                      locationOptions={locationName}
                      onLocationChange={(newLocation) =>
                        handleLocationChange(dayIndex, valueIndex, newLocation)
                      } // Pass the onLocationChange handler
                    />
                  </TableCell>
                  <TableCell>
                    {/* Show "Add" button only in the first row and if there are fewer than 3 rows */}
                    {valueIndex === 0 && dayEntry.value.length < 3 && (
                      <IconButton onClick={() => repeatRow(dayIndex)}>
                        <AddCircleOutlineIcon />
                      </IconButton>
                    )}

                    {/* Show "Remove" button for all rows except the first one */}
                    {valueIndex !== 0 && (
                      <IconButton
                        onClick={() => removeRow(dayIndex, valueIndex)}
                      >
                        <RemoveCircleIcon />
                      </IconButton>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
