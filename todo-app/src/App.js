import './App.css';
import Background from './Background';
import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LogIn from './LogIn';
import Todoist from './Todoist';
function App() {

  const [example, setExample] = useState();

//   <Route exact path="/" component={LogIn}/>
  //tomorrow, we need to set up the routing of this app.
    return(
      <div> 
        <BrowserRouter>
          <Switch> 
           
              <Route exact path="/app" component={Todoist}/>
              <Route exact path="/login" component={LogIn}/>
          </Switch>
       
        </BrowserRouter>
        
      </div>
     
    )
}

export default App;
