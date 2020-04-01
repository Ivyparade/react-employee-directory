import React from "react";
import EmployeeTable from "./components/EmployeeTable";
import Wrapper from "./components/Wrapper";
import API from "./utils/API";
import "./App.css";

class App extends React.Component {
  state = {
    employees: []
  }

  componentDidMount() {
    this.getEmployees(30);
  }

  getEmployees = (query) => {
    API.search(query)
      .then(res => this.setState({ employees: res.data.results }))
      .catch(err => console.log(err));
  }
  
  render() {
  return (
    <Wrapper>
      <h1 className="title">Employee Directory</h1>
      <EmployeeTable results={this.state.employees} />
    </Wrapper>
  ); 
  }
}

export default App;
