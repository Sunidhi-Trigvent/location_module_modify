import { Button, Divider, Stack, Typography } from "@mui/material";
import BasicModal from "./components/ModalComp";
import FrontBasicTable from "./components/FrontTableComp";
import { useState } from "react";
import OutlinedCard from "./components/CardComp";
import { useDispatch } from "react-redux";
import { manageArray } from "./redux/locationModuleSlice";

// Define interfaces for typing
interface Time {
  startTime: string;
  endTime: string;
}

interface Session {
  id: number;
  Time: Time;
  Session: string[];
  Location: string;
}

interface FrontTableEntry {
  day: string;
  value: Session[];
}

function Location() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [locationName, setLocationName] = useState<string[]>([]);
  const [updateIndex, setUpdateIndex] = useState<number | null>(null);

  const [frontTable, setFrontTable] = useState<FrontTableEntry[]>([
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

  const handleSaveArray = () => {
    // const savedArray = frontTable.map((item: FrontTableEntry) => ({ ...item }));
    dispatch(manageArray(frontTable));
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSave = () => {
    if (updateIndex === null) {
      setLocationName((prev) => [...prev, inputValue]);
    } else {
      const updatedLocations = [...locationName];
      updatedLocations[updateIndex] = inputValue;
      setLocationName(updatedLocations);
      setUpdateIndex(null);
    }
    setInputValue("");
    setOpen(false);
  };

  const handleCancel = () => {
    setInputValue("");
    setOpen(false);
  };

  const handleRemove = (i: number) => {
    const updatedList = locationName.filter((_, id) => id !== i);
    setLocationName(updatedList);
  };

  const handleUpdate = (i: number) => {
    setInputValue(locationName[i]);
    setUpdateIndex(i);
    setOpen(true);
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
        <OutlinedCard
          locationName={locationName}
          handleRemove={handleRemove}
          handleUpdate={handleUpdate}
        />
      </Stack>

      <FrontBasicTable
        frontTable={frontTable}
        setFrontTable={setFrontTable}
        locationName={locationName}
      />
      <br />
      <Stack
        direction={"row"}
        alignItems={"center"}
        p={1}
        justifyContent={"center"}
        spacing={2}
      >
        <Button variant="contained" onClick={handleSaveArray}>
          Save Array
        </Button>
      </Stack>
    </>
  );
}

export default Location;
