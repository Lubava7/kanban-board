import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={spacing}>
          {[0, 1, 2].map((value) => (
            <Grid
              // ondragstart={drag(e)}
              // ondrop={drop(e)}
              // ondragover={allowDrop(e)}
              draggable="true"
              key={value}
              item
            >
              <Paper
                sx={{
                  height: 800,
                  width: 320,
                  backgroundColor: "pink",
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Paper sx={{ p: 2 }}>
          <Grid container>
            <Grid item></Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
