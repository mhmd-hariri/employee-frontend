import React, { useEffect, useState } from 'react'
import EmployeesService from './EmployeesService';
import { Link, useNavigate } from 'react-router-dom';
import { Employee } from './Employee';

/**
* @author
* @function EmployeesList
**/

export const EmployeesList = (props) => {
    const [employees,setEmployees] = useState([]);
    //const navigate = useNavigate();
    useEffect(()=>{
          new EmployeesService().getEmployees().then((res) => setEmployees(res.data))
    },[])

   /*  const editEmployee = (id) => {
      navigate(`/update-employee/${id}`)

    }
    const deleteEmployee = (id) => {
          new EmployeesService().deleteEmployeeById(id).then(res =>{
             setEmployees(employees => employees.filter(employee => employee.id !== id))
          })
    }
    const viewEmployee = (id) => {
      navigate(`/view-employee/${id}`);

    } */
  return(
    <div>
       <h2 className='text-center'>Employees List</h2>
       <div className='row'>
        <Link to="/addEmployee">
        <button className='btn btn-primary'>Add Employee</button>
        </Link>
       </div>
       <hr/>
       <div className='row'>
             <table className='table  table-striped table-bordered'>
               <thead>
                 <tr>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email Id</th>
                    <th>Actions</th>

                 </tr>
               </thead>
               <tbody>
                 {
                    employees.map((employee) => 
                    <Employee employee={employee}  setEmployees={setEmployees}  />
                   /*  <tr key={employee.id}>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.emailId}</td>
                        <td>
                          <button type='button' className='btn btn-info mx-2' onClick={() => editEmployee(employee.id)}>UPDATE</button>
                          <button type='button' className='btn btn-danger mx-2' onClick={() => deleteEmployee(employee.id)}>DELETE</button>
                          <button type='button' className='btn btn-info mx-2' onClick={() => viewEmployee(employee.id)}>VIEW</button>
                          </td>
                    </tr> */
                    )
                 }
                
               </tbody>

             </table>
       </div>
    </div>
   )
  }
