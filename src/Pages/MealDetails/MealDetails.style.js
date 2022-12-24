import { Box, styled } from "@mui/material";

export const CounterBox = styled(Box)(({ them }) => ({
  borderRadius: "20px",
  border: `1px solid #e1e1e1`,
  width: "150px",
  display: "flex",
  alignItems: "center",
  justifyContent:"center",
  gap: "1rem",
  marginLeft: "1.5rem",
  padding: "2px 4px",
  "& > svg": {
    cursor: "pointer",
  },
  "& > svg:hover": {
    color: "#f94944"
  },
}));
