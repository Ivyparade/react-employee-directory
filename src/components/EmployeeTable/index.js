import React from "react";
import "./style.css";

function EmployeeTable(props) {
  return (
    <table>
      <thead>
        <tr>
          <td>Image</td>
          <td>Name</td>
          <td>Phone</td>
          <td>Email</td>
          <td>DOB</td>
        </tr>
      </thead>
      <tbody>
        {
          props.results.map(employee => {
            return (
              <tr>
                <td>
                  <img alt={employee.name.first, employee.name.last} src={employee.picture.thumbnail}></img>
                </td>
                <td>
                  {employee.name.first} {employee.name.last}
                </td>
                <td>
                  {employee.phone}
                </td>
                <td>
                  {employee.email}
                </td>
                <td>
                  {employee.dob.date}
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  );
}

export default EmployeeTable;
