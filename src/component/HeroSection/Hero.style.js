import { Box, styled } from "@mui/material";
export const HeroSectionRapper = styled(Box)(() => ({
  height: "70vh",
  width: "110%",
  backgroundImage: "url(https://i.ibb.co/Lkg9GZW/bannerbackground.png)",
  backgroundPosition: "center",
}))
export const SearchBox = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  maxWidth: "500px",
  margin: "0 auto",
  background: "#fff",
  borderRadius: "50px",
  overflow: "hidden",
  marginTop:theme.spacing(5),
  "& input": {
    border: "none",
    outline: "none",
    padding: "1rem 2rem",
    width: "100%",
    borderRadius: "50px",
    fontSize: "1.2rem",
  },
  "& button": {
    position: "absolute",
    right: "0",
    top: "0",
    background: "#F91944",
    border: "none",
    outline: "none",
    padding: "1rem 2rem",
    color: "#ffffff",
    fontSize: "1.2rem",
    borderRadius: "30px",
    cursor: "pointer",
  },
}));
