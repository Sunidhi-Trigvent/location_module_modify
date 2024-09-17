import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

// Define the type for the props
interface BasicTableProps {
  locationName?: any;
  handleRemove?: any;
  handleUpdate?: any;
}

const BasicTable: React.FC<BasicTableProps> = ({
  locationName,
  handleRemove,
  handleUpdate,
}) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Location Name</TableCell>
            <TableCell>Actions</TableCell> {/* Add an Actions column */}
          </TableRow>
        </TableHead>
        <TableBody>
          {locationName?.map((name: any, index: any) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {name}
              </TableCell>
              <TableCell>
                <Button variant="contained" onClick={() => handleRemove(index)}>
                  Remove
                </Button>
                <Button variant="contained" onClick={() => handleUpdate(index)}>
                  Update
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasicTable;
