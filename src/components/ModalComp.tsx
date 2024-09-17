import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import BasicSelect from "./SelectComp";
import { Stack, TextField } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({
  open,
  setOpen,
  inputValue,
  handleInputChange,
  handleSave,
  handleCancel,
  handleOpen,
}: any) {
  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Add Location
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Choose Location
          </Typography>
          <TextField
            id="outlined-basic"
            label="Location"
            variant="outlined"
            defaultValue={inputValue}
            onChange={(e) => handleInputChange(e)}
          />

          <Stack direction={"row"} m={2} gap={2}>
            <Button variant="contained" onClick={handleSave}>
              Save
            </Button>
            <Button variant="contained" onClick={handleCancel}>
              Cancel
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
