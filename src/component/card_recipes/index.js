import React from "react";
import {
  Card,
  Typography,
  Grid,
  CardMedia,
  CardContent
} from "@material-ui/core";
import Burger from "../../assets/burger.jpg";

function Component() {
  return (
    <React.Fragment>
      <Card style={{ borderRadius: 7, backgroundColor: "#f0f4f8" }}>
        <CardMedia>
          <img src={Burger} style={{ maxWidth: 345, width: "100%" }} />
        </CardMedia>
        <CardMedia>
          <Grid item xs={12} style={{ padding: 15 }}>
            <Typography variant="subtitle1">
              <b>Burger with knife in top</b>
            </Typography>
            <Grid>
              <Typography variant="subtitle2">
                Delicious burgers with the right portion and fun to be enjoyed
                with family at home
              </Typography>
            </Grid>
          </Grid>
        </CardMedia>
      </Card>
    </React.Fragment>
  );
}
export default Component;
