import React from 'react'
import Table from 'react-bootstrap/Table';
const TableB = () => {
    console.log("heloo")
  return (
    <div>
       <Table striped bordered hover>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Disease</th>
          <th>Type</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mark</td>
          <td>Otto</td>
          <td>Heart Cancer</td>
          <td>Critical</td>
        </tr>
        <tr>
          <td>Jacod</td>
          <td>Thornton</td>
          <td>Constipation</td>
          <td>Acute</td>
        </tr>
        <tr>
          <td>Larry</td>
          <td>Thomsan</td>
          <td>Blood Cancer</td>
          <td>Severe</td>
        </tr>
      </tbody>
    </Table>
    </div>
  )
}

export default TableB;
