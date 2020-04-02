import React from "react";
import "./style.css";

function EmployeeTable(props) {
  return (
      <tbody>
        {
          props.results.map(employee => {
            return (
              <tr data-id={employee.id.value}>
                <td>
                  <img alt="" src={employee.picture.thumbnail}></img>
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
  );
}

export default EmployeeTable;
