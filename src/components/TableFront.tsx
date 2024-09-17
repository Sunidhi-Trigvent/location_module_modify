export {};

// import * as React from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import BasicSelect from "./SelectComp";
// import AppointmentTypeSelect from "../AutocompleteComp";
// import BasicSelectTwo from "../SelectLocComp";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCirclePlus } from "@fortawesome/free-solid-svg-icons"; // Import the icon

// const rows = [
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
//   "Sunday",
// ];

// interface BasicTableFrontProps {
//   locationName: string[]; // Accept locationName as a prop
// }

// export default function BasicTableFront({
//   locationName,
// }: BasicTableFrontProps) {
//   const [selectedTimes, setSelectedTimes] = React.useState(
//     rows.map(() => ({ firstTime: "", secondTime: "" }))
//   );

//   // Track appointment types for each row
//   const [appointmentTypes, setAppointmentTypes] = React.useState<string[][]>(
//     rows.map(() => [])
//   );

//   const handleFirstTimeChange = (index: number, time: string) => {
//     const updatedTimes = [...selectedTimes];
//     updatedTimes[index].firstTime = time;
//     updatedTimes[index].secondTime = ""; // Reset second select when first changes
//     setSelectedTimes(updatedTimes);
//   };

//   const handleSecondTimeChange = (index: number, time: string) => {
//     const updatedTimes = [...selectedTimes];
//     updatedTimes[index].secondTime = time;
//     setSelectedTimes(updatedTimes);
//   };

//   const handleAppointmentTypeSelect = (index: number, types: string[]) => {
//     const updatedTypes = [...appointmentTypes];
//     updatedTypes[index] = types; // Update the appointment types for the specific row
//     setAppointmentTypes(updatedTypes);
//   };

//   const repeatRow = () => {};

//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Day</TableCell>
//             <TableCell>First Time</TableCell>
//             <TableCell>Second Time</TableCell>
//             <TableCell>Session Type</TableCell>
//             <TableCell>Location</TableCell>
//             <TableCell>Add</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((name, index) => (
//             <TableRow
//               key={index}
//               sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {name}
//               </TableCell>

//               <TableCell component="th" scope="row">
//                 <BasicSelect
//                   onChange={(value) => handleFirstTimeChange(index, value)}
//                 />
//               </TableCell>

//               <TableCell component="th" scope="row">
//                 <BasicSelect
//                   startTime={selectedTimes[index].firstTime}
//                   onChange={(value) => handleSecondTimeChange(index, value)}
//                 />
//               </TableCell>

//               <TableCell component="th" scope="row">
//                 {/* Pass the row-specific handler for appointment type selection */}
//                 <AppointmentTypeSelect
//                   onSelect={(types) =>
//                     handleAppointmentTypeSelect(index, types)
//                   }
//                 />
//               </TableCell>

//               <TableCell component="th" scope="row">
//                 {/* Conditionally render BasicSelectTwo based on the selected appointment type */}
//                 {appointmentTypes[index].includes("Inperson") && (
//                   <BasicSelectTwo locationOptions={locationName} />
//                 )}
//               </TableCell>

//               <TableCell component="th" scope="row">
//                 {/* Use the imported faCirclePlus icon */}
//                 <FontAwesomeIcon icon={faCirclePlus} onClick={repeatRow} />
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
