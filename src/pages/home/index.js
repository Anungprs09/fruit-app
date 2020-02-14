import React from "react";
import {Container,Grid,Typography} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Broccoli from "../../assets/broccoli.svg";
import Strowberry from "../../assets/strawberry.svg";

function Component(){
    return(
        <React.Fragment>

            <Container maxWidth="xs"style={{backgroundColor:"#fff",padding:15,paddingBottom:50}}>
              <Grid container spacing={0} style={{marginTop:30}}>
                  <Grid item xs ={2}></Grid>
                    <Grid align="center" item xs={8}>
                      <Typography variant="subtitle1">Store</Typography>
                    </Grid>
                  <Grid align="right" item xs={2}><SearchIcon/></Grid>
            </Grid>  

            <Grid container spacing={0} style={{marginTop:20}}>
                <Grid align="center" item xs ={12}>
                    <img src={Broccoli} style={{maxWidth:260, width:"100%"}}/>
                </Grid>
                <Grid align="center" item xs ={12}>
                    <Typography variant="h5" style={{opacity:0.5}}>Vegetables</Typography>
                </Grid>

                <Grid align="center" item xs ={12}>
                    <Typography variant="caption" style={{opacity:0.5}}>Browse</Typography>
                </Grid>
            </Grid>


            </Container>

        </React.Fragment>
    )
}

export default Component;