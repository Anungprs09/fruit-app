import React, { useEffect } from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Home from "../../assets/icon-store.svg";
import Recipes from "../../assets/icon-recipes.svg";
import Setting from "../../assets/icon-settings.svg";
import Cart from "../../assets/icon-cart.svg";
import { withRouter } from "react-router-dom";

function Component(props) {
  const [value, setValue] = React.useState(0);
  useEffect(() => {
    let value = 0;
    switch (props.history.location.pathname) {
      case "/":
        value = 0;
        break;
      case "/recipes":
        value = 1;
        break;
      case "/cart":
        value = 2;
        break;
      case "/setting":
        value = 3;
        break;
      default:
        break;
    }
    setValue(value);
  }, []);
  return (
    <React.Fragment>
      <BottomNavigation
        value={value}
        onChange={(event, Value) => {
          setValue(Value);
          switch (value) {
            case 0:
              props.history.push("/");
              return;
            case 1:
              props.history.push("/recipes");
              return;
            case 2:
              props.history.push("/cart");
              return;
            case 3:
              props.history.push("/setting");
              return;
            default:
              return;
          }
        }}
        style={{ maxWidth: 450, width: "100%" }}
      >
        <BottomNavigationAction
          icon={<img src={Home} style={{ color: "#f1f1f1" }} />}
        />
        <BottomNavigationAction icon={<img src={Recipes} />} />
        <BottomNavigationAction icon={<img src={Cart} />} />
        <BottomNavigationAction icon={<img src={Setting} />} />
      </BottomNavigation>
    </React.Fragment>
  );
}

export default withRouter(Component);
