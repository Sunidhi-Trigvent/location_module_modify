import { Button, Divider, Stack, Typography } from "@mui/material";
import BasicModal from "./components/ModalComp";
import FrontBasicTable from "./components/FrontTableComp";
import { useState } from "react";
import OutlinedCard from "./components/CardComp";

function Location() {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [locationName, setLocationName] = useState<string[]>([]); // Typing locationName as an array of strings
  const [updateIndex, setUpdateIndex] = useState<number | null>(null); // State to store the index of the task being updated

  const [frontTable, setFrontTable] = useState<any>([
    {
      day: "Sunday",
      value: [
        {
          id: 1,
          Time: { startTime: "", endTime: "" },
          Session: [],
          Location: "",
        },
      ],
    },
    {
      day: "Monday",
      value: [
        {
          id: 2,
          Time: { startTime: "", endTime: "" },
          Session: [],
          Location: "",
        },
      ],
    },
    {
      day: "Tuesday",
      value: [
        {
          id: 3,
          Time: { startTime: "", endTime: "" },
          Session: [],
          Location: "",
        },
      ],
    },
    {
      day: "Wednesday",
      value: [
        {
          id: 4,
          Time: { startTime: "", endTime: "" },
          Session: [],
          Location: "",
        },
      ],
    },
    {
      day: "Thursday",
      value: [
        {
          id: 5,
          Time: { startTime: "", endTime: "" },
          Session: [],
          Location: "",
        },
      ],
    },
    {
      day: "Friday",
      value: [
        {
          id: 6,
          Time: { startTime: "", endTime: "" },
          Session: [],
          Location: "",
        },
      ],
    },
    {
      day: "Saturday",
      value: [
        {
          id: 7,
          Time: { startTime: "", endTime: "" },
          Session: [],
          Location: "",
        },
      ],
    },
  ]);

  console.log(frontTable);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSave = () => {
    if (updateIndex === null) {
      // Add a new location if updateIndex is null
      setLocationName((prev) => [...prev, inputValue]);
    } else {
      // Update the existing location
      const updatedLocations = [...locationName];
      updatedLocations[updateIndex] = inputValue; // Update location with the new input
      setLocationName(updatedLocations);
      setUpdateIndex(null); // Reset update index after update
    }
    setInputValue(""); // Clear the input field
    setOpen(false); // Close the modal
  };

  const handleCancel = () => {
    setInputValue(""); // Clear the input field
    setOpen(false); // Close the modal
  };

  // Function to handle remove action
  const handleRemove = (i: number) => {
    const updatedList = locationName.filter((_, id) => id !== i);
    setLocationName(updatedList);
  };

  // Function to handle update action
  const handleUpdate = (i: number) => {
    setInputValue(locationName[i]); // Set the input value to the location being updated
    setUpdateIndex(i); // Set the index of the location being updated
    setOpen(true); // Open the modal
  };

  return (
    <>
      <Stack width={600} sx={{ float: "right" }} m={2} gap={2}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          p={1}
          justifyContent={"space-between"}
          spacing={2}
        >
          <Typography variant="h4">Location</Typography>
          <BasicModal
            open={open}
            setOpen={setOpen}
            inputValue={inputValue}
            handleInputChange={handleInputChange}
            handleSave={handleSave}
            handleCancel={handleCancel}
            handleOpen={handleOpen}
          />
        </Stack>
        <Divider />
        {/* Pass locationName, handleRemove, and handleUpdate to OutlinedCard */}
        <OutlinedCard
          locationName={locationName}
          handleRemove={handleRemove}
          handleUpdate={handleUpdate}
        />
      </Stack>

      {/* Pass frontTable, setFrontTable, locationName, and showLocation to FrontBasicTable */}
      <FrontBasicTable
        frontTable={frontTable}
        setFrontTable={setFrontTable}
        locationName={locationName}
      />
    </>
  );
}

export default Location;
