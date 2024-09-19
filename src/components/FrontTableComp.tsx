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
  appointmentType: string[]; // Track appointment types for each row
}

interface DayTable {
  day: string;
  value: Value[];
  showPlusIcon: boolean; // Track if the plus icon should be shown
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

  const handleSecondTimeChange = (
    dayIndex: number,
    valueIndex: number,
    time: string
  ) => {
    const updatedTable = [...frontTable];
    updatedTable[dayIndex].value[valueIndex].Time.endTime = time;
    setFrontTable(updatedTable);
  };

  const handleAppointmentTypeChange = (
    dayIndex: number,
    valueIndex: number,
    types: string[]
  ) => {
    const updatedTable = [...frontTable];
    updatedTable[dayIndex].value[valueIndex].appointmentType = types;
    setFrontTable(updatedTable);
  };

  // Function to add a new row, with a limit of 3 rows per day
  const repeatRow = (dayIndex: number) => {
    const updatedTable = [...frontTable];
    const currentDay = updatedTable[dayIndex];

    // Add a new row if there are fewer than 3 rows for the given day
    if (currentDay.value.length < 3) {
      const newRow = {
        id: Math.random(), // New unique ID
        Time: { startTime: "", endTime: "" }, // Empty Time fields
        Session: [], // Empty Session array
        Location: "", // Empty Location
        appointmentType: [], // Empty appointment type array
      };
      currentDay.value.push(newRow); // Add new row

      // Update showPlusIcon based on the number of rows
      if (currentDay.value.length >= 3) {
        currentDay.showPlusIcon = false;
      }
      setFrontTable(updatedTable);
    }
  };

  // Function to remove a row
  const removeRow = (dayIndex: number, valueIndex: number) => {
    const updatedTable = [...frontTable];
    const currentDay = updatedTable[dayIndex];

    currentDay.value.splice(valueIndex, 1); // Remove the row at valueIndex

    // Update showPlusIcon based on the number of rows
    if (currentDay.value.length < 3) {
      currentDay.showPlusIcon = true;
    }
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
                      appointmentType={entry.appointmentType}
                      locationOptions={locationName}
                    />
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow>
              ))}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
