import React from "react";
import EmployeeTable from "./components/EmployeeTable";
import Wrapper from "./components/Wrapper";
import API from "./utils/API";
import "./App.css";

class App extends React.Component {
  state = {
    search: "",
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

  handleInputChange = event => {
    this.setState({search: event.target.value});
    console.log(this.state.search);
  };

  handleSort = (sort) => {
    switch (sort) {
      case "name":
        return this.setState({ employees: this.state.employees.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1) })
      case "phone":
        return this.setState({ employees: this.state.employees.sort((a, b) => (a.phone > b.phone) ? 1 : -1) })
      case "email":
        return this.setState({ employees: this.state.employees.sort((a, b) => (a.email > b.email) ? 1 : -1) })
      default:
        return this.setState({ employees: this.state.employees })
    }
  }

  handleSearch = (event) => {
    event.preventDefault();
    this.setState({ employees: this.state.employees.filter(employee => employee.name.first === this.state.search) });
    this.setState({ search: ""});
  }

  render() {
    return (
      <Wrapper>
        <div>
          <h1 className="title">Employee Directory</h1>
          <form>
            <label>
              Name:
            <input type="text" name="name" onChange={this.handleInputChange}/>
            </label>
            <input type="submit" value="Submit" onClick={this.handleSearch}/>
          </form>
        </div>
        <table>
          <thead>
            <tr>
              <td>Image</td>
              <td onClick={() => this.handleSort("name")}>Name</td>
              <td onClick={() => this.handleSort("phone")}>Phone</td>
              <td onClick={() => this.handleSort("email")}>Email</td>
              <td>DOB</td>
            </tr>
          </thead>
          <EmployeeTable results={this.state.employees} />
        </table>
      </Wrapper>
    );
  }
}

export default App;
