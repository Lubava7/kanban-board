import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

function AddTask() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Карточка таска, НЕ проекта
        </Typography>
        <Typography variant="h5" component="div">
          Имя{bull}про{bull}е{bull}кта
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          название проекта , в котором таск
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Редактировать</Button>
      </CardActions>
    </Card>
  );
}

export default AddTask;
