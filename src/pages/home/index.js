import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Broccoli from "../../assets/broccoli.svg";
import Strowberry from "../../assets/strawberry.svg";

function Component() {
  return (
    <React.Fragment>
      <Container
        maxWidth="xs"
        style={{ backgroundColor: "#fff", padding: 15, paddingBottom: 50 }}
      >
        <Grid container spacing={0} style={{ marginTop: 30 }}>
          <Grid item xs={2}></Grid>
          <Grid align="center" item xs={8}>
            <Typography variant="subtitle1">Store</Typography>
          </Grid>
          <Grid align="right" item xs={2}>
            <SearchIcon />
          </Grid>
        </Grid>

        <Grid container spacing={0} style={{ marginTop: 20 }}>
          <Grid align="center" item xs={12}>
            <img src={Broccoli} style={{ maxWidth: 260, width: "100%" }} />
          </Grid>
          <Grid align="center" item xs={12}>
            <Typography variant="h5" style={{ opacity: 0.5 }}>
              Vegetables
            </Typography>
          </Grid>

          <Grid align="center" item xs={12}>
            <Typography variant="caption" style={{ opacity: 0.5 }}>
              Browse
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={0}
          style={{
            marginTop: "5%",
            marginBottom: "5%",
            padding: 15,
            display: "flex",
            flexWrap: "nowrap",
            overflowX: "auto",
            "-webkit-overflow-scrolling": "touch",
            "&::-webkit-scrollbar": { display: "none" },
            backgroundColor: "none"
          }}
        >
          <Grid
            align="center"
            item
            xs={7}
            style={{
              padding: 10,
              backgroundColor: "#DD4040",
              borderRadius: 7,
              marginRight: "5%"
            }}
          >
            <img src={Strowberry} />
            <Grid>
              <Typography variant="subtitle2" style={{ color: "#fff" }}>
                Berries
              </Typography>
            </Grid>
          </Grid>

          <Grid
            align="center"
            item
            xs={7}
            style={{
              padding: 10,
              backgroundColor: "#ffa700",
              borderRadius: 7,
              marginRight: "5%"
            }}
          >
            <Grid>
              <img src={Strowberry} />
              <Grid>
                <Typography variant="subtitle2" style={{ color: "#fff" }}>
                  Citrus
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            align="center"
            item
            xs={7}
            style={{
              padding: 10,
              backgroundColor: "#ffd958",
              borderRadius: 7,
              marginRight: "5%"
            }}
          >
            <Grid>
              <img src={Strowberry} />
              <Grid>
                <Typography variant="subtitle2" style={{ color: "#fff" }}>
                  Banana
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default Component;
