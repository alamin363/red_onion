import { styled, TextField } from "@mui/material";
import React, { forwardRef } from "react";
export const CustomInputField = styled(TextField)(({ theme }) => ({
  background: "#f5f5f5",
  borderRadius: theme.spacing(1),
  border: "none",
  "& .MuiInputBase-root": {
    "& fieldset": {
      border: "none",
    },
  },
}));
const InputField = (props, ref) => {
  return (
    <CustomInputField
      id="outlined-basic"
      variant="outlined"
      {...props}
      inputRef={ref}
      // size="small"
    />
  );
};

export default forwardRef(InputField);
