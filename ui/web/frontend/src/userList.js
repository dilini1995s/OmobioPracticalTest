import React from 'react'
import axios from 'axios';

class userList extends React.Component {

    constructor(props) {
        super(props)
          this.state = {
            data: []
            }
        }
      componentDidMount(){
        //get request
        axios.get('http://localhost:80/Practical_test/userlist.php').then(res => 
        {
        this.setState({data: res.data});
        }); 
        
        }
    
 
  render() {
   
    return (
     
      <div className="maincontainer">
        <h1 className="mr-5 ml-5 mt-5">User List</h1>
        <div className="container mb-5 mt-5 text-left">
        
        <table class="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>  
            </tr>
          </thead>
          <tbody>
          {this.state.data.map((result) => {
            return (
             
                 <tr>
                  <td>{result.id}</td>
                  <td>{result.name}</td>
                  <td>{result.username}</td>
                  <td>{result.email}</td>  
                </tr>
            )
          })}
           
          </tbody>
        </table>
      </div>
      </div>
     
    )
  };
}

export default userList;

