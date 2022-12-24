import { ArrowForward } from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const FutureCard = ({ future }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        boxShadow: "node",
        borderRadius: 5,
        cursor: "pointer",
        p: 2,
        "&:hover": {
          boxShadow: "10px 10px 20px #f90f3c",
        },
      }}
    >
      <CardMedia
        component="img"
        height="auto"
        image={future.image}
        alt="green agone"
      />
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: 1,
          "&:last-child": {
            pb: 0,
          },
        }}
      >
        <Box
          sx={{
            bgcolor: "primary.main",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 1,
            borderRadius: "50%",
          }}
        >
          <future.icon
            sx={{
              color: "#fff",
            }}
          />
        </Box>
        <Box>
          <Typography gutterBottom variant="h6" component="div">
            {future.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            tenetur delectus porro dolorum quo animi eligendi similique vitae
            itaque quasi.
          </Typography>
          <Button sx={{ mt: 3 }} onEmptied={<ArrowForward />}>
            See more{" "}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default FutureCard;
