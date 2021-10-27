import './App.css';
import Background from './components/Background';
import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LogIn from './LogIn';
import Todoist from './components/Todoist';
function App() {

  const [example, setExample] = useState();


  //tomorrow, we need to set up the routing of this app.
    return(
      <div> 
        <BrowserRouter>
          <Switch> 
              <Route exact path="/" component={LogIn}/>
              <Route exact path="/app" component={Todoist}/>
          </Switch>
       
        </BrowserRouter>
        
      </div>
     
    )
}

export default App;
