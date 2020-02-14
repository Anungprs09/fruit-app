import React from "react";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Home from "../../assets/icon-store.svg";
import Recipes from "../../assets/icon-recipes.svg";
import Setting from "../../assets/icon-settings.svg";
import Cart from "../../assets/icon-cart.svg";

function Component(){
    const [value, setValue] = React.useState(0);

    return(
        <React.Fragment>
            <BottomNavigation  value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels style={{maxWidth:450,width:"100%"}}>
                <BottomNavigationAction label="Home"  icon={<img src={Home} style={{color:"#f1f1f1"}}/>}/>
                <BottomNavigationAction label="Recipes" icon={<img src={Recipes}/>}/>
                <BottomNavigationAction label="Cart" icon={<img src={Cart}/>}/>
                <BottomNavigationAction label="Setting" icon={<img src={Setting}/>}/>
             </BottomNavigation>
        </React.Fragment>
    )
}

export default Component;

