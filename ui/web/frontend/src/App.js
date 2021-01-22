import React,  {Component} from "react";
import './App.css';
import Axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Switch, BrowserRouter,Route, Link } from "react-router-dom";
import userList from "./userList";

class App extends Component{
  constructor(props){
      super(props);
      this.state = {
          username:'',
          password:''
      }
  }

  submitHandler = async (event) => {
      event.preventDefault();
      console.log(this.state.username);
      const dat1 = this.state.username;
      const dat2 = this.state.password;
      Axios({
              method: 'POST',
              url: 'http://localhost:80/Practical_test/index.php',
              headers: {
                'Content-Type': 'application/json',
              },
              data: {
                dat1,
                dat2
              }
            })
            .then((response) => {
              console.log(response)
            })
            .catch((error) => {
              console.log(error)
            })

  }

  render(){
      return(
          <div className="form">
          <nav class="navbar navbar-dark bg-primary">
            <h3>Login form</h3>
          </nav>
          <br></br>
          <form method="POST" onSubmit={this.submitHandler}>
              <div className="form-group">
                  <input type="text" name="username" class="form-control" placeholder="username" onChange={(event)=>{
                      this.setState({
                          username:event.target.value
                      });
                  }} value={this.state.username} />
              </div>
                  <br></br><br></br>
              <div className="form-group">
                  <input type="text" name="password" class="form-control" placeholder="password" onChange={(event)=>{
                      this.setState({
                        password:event.target.value
                      });
                  }} value={this.state.password} />
              </div><br></br><br></br>

                  <input type="submit" value="Login" className="btn btn-dark btn-lg btn-block" name="submit" />
            </form>
              <a href="/user" className="navbar-brand">
                UserList
              </a>
              
        <div className="container mt-3">
        <BrowserRouter>
          <Switch>
            <Route exact path="/user" component={userList} />
          </Switch>
          </BrowserRouter>
        </div>

        </div>
      );
  }

  
}

export default App;
