import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from "./pages/home";
import Recipes from "./pages/recipes";
import BottomNavigation from "./component/bottom-navigation";

function App() {
  return (
   <React.Fragment>
     <div>
       <Switch>
         <Route exact path="/" component={Home}/>
         <Route exact path="/recipes" component={Recipes}/>
       </Switch>
          <div style={{width:"100%",display:"flex",justifyContent:"center",position:"fixed",bottom:0}}>
          <BottomNavigation/>
          </div>
     </div>
   </React.Fragment>
  );
}

export default App;
