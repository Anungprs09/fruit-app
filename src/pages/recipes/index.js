import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Cardrecipe from "../../component/card_recipes";

function Component(props) {
  const [tab, setTab] = React.useState(0);
  const tabStyle = () => {
    if (tab == 1) {
      return {
        padding: 5,
        borderRadius: 50,
        backgroundColor: "#9cf2aa",
        color: "#fff"
      };
    } else {
      return {
        padding: 5,
        backgroundColor: "unset",
        color: "#afc3d5"
      };
    }
  };

  const tabStyle1 = () => {
    if (tab == 2) {
      return {
        padding: 5,
        borderRadius: 50,
        backgroundColor: "#9cf2aa",
        color: "#fff"
      };
    } else {
      return {
        padding: 5,
        backgroundColor: "unset",
        color: "#afc3d5"
      };
    }
  };
  const tabStyle2 = () => {
    if (tab == 3) {
      return {
        padding: 5,
        borderRadius: 50,
        backgroundColor: "#9cf2aa",
        color: "#fff"
      };
    } else {
      return {
        padding: 5,
        backgroundColor: "unset",
        color: "#afc3d5"
      };
    }
  };
  const tabStyle3 = () => {
    if (tab == 4) {
      return {
        padding: 5,
        borderRadius: 50,
        backgroundColor: "#9cf2aa",
        color: "#fff"
      };
    } else {
      return {
        padding: 5,
        backgroundColor: "unset",
        color: "#afc3d5"
      };
    }
  };
  return (
    <React.Fragment>
      <Container maxWidth="xs">
        <Grid container spacing={0} style={{ marginTop: 40 }}>
          <Grid item xs={2}></Grid>
          <Grid align="center" item xs={8}>
            <Grid>
              <Typography variant="subtitle1">Recipes</Typography>
            </Grid>
          </Grid>
          <Grid align="center" item xs={2}>
            <SearchIcon />
          </Grid>
        </Grid>

        <Grid container spacing={0} style={{ padding: 20 }}>
          <Grid align="center" item xs={3}>
            <Grid onClick={() => setTab(1)} style={tabStyle()}>
              <Typography
                variant="subtitle1"
                style={{ color: "#afc3d5", marginRight: "15%" }}
              >
                All
              </Typography>
            </Grid>
          </Grid>

          <Grid align="center" item xs={3}>
            <Grid onClick={() => setTab(2)} style={tabStyle1()}>
              <Typography
                variant="subtitle1"
                style={{ color: "#afc3d5", marginRight: "15%" }}
              >
                Vegan
              </Typography>
            </Grid>
          </Grid>

          <Grid align="center" item xs={3}>
            <Grid onClick={() => setTab(3)} style={tabStyle2()}>
              <Typography
                variant="subtitle1"
                style={{ color: "#afc3d5", marginRight: "15%" }}
              >
                Keto
              </Typography>
            </Grid>
          </Grid>

          <Grid align="center" item xs={3}>
            <Grid onClick={() => setTab(4)} style={tabStyle3()}>
              <Typography variant="subtitle1" style={{ color: "#afc3d5" }}>
                Paleo
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <div>
          <Cardrecipe />
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Component;
