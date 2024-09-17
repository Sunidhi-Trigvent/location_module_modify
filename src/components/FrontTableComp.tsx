import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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
  frontTable: DayTable[]; // Typing the frontTable prop
}

export default function FrontBasicTable({ frontTable }: FrontBasicTableProps) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Day</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Session Type</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {frontTable.map((dayEntry, i) => (
            <TableRow key={i}>
              <TableCell>{dayEntry.day}</TableCell>
              {dayEntry.value.map((entry) => (
                <TableRow>
                  <TableCell>
                    {entry.Time.startTime} - {entry.Time.endTime}
                  </TableCell>
                  <TableCell>{entry.Session}</TableCell>
                  <TableCell>{entry.Location}</TableCell>
                  <TableCell>
                    {/* Actions like Edit/Delete buttons can go here */}
                  </TableCell>
                </TableRow>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
