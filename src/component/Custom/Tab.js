import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export const ButtonTab = ({ value, setValue }) => {
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab
          sx={{
            "&:hover": {
              color: "#f90f3c",
            },
          }}
          label="BREAKFAST"
        />
        <Tab
          sx={{
            "&:hover": {
              color: "#f90f3c",
            },
          }}
          label="LUNCH"
        />
        <Tab
          sx={{
            "&:hover": {
              color: "#f90f3c",
            },
          }}
          label="DINNER"
        />
      </Tabs>
    </Box>
  );
};
