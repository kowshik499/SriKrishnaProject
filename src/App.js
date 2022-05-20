import {BrowserRouter, Route, Switch} from "react-router-dom"
import {Component} from "react"

import Admin from "./components/Admin"
import ExistingUser from "./components/ExistingUser"
import GuestUser from "./components/GuestUser"

class App extends Component{
  
  state = {
    username: "",
  }

  onChangeValue = value =>{
    this.setState({username: value})
  }

  render(){
    const {username} = this.state
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/" >
            <Admin onChangeValue = {this.onChangeValue}/>
          </Route>
          <Route exact path="/guestuser">
            <GuestUser username={username} />
          </Route>
          <Route exact path="/existinguser">
            <ExistingUser username={username} />
          </Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
