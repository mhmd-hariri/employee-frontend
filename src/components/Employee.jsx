import React, { useState } from 'react'
import EmployeesService from './EmployeesService';
import { useNavigate } from 'react-router-dom';

/**
* @author
* @function Employee
**/

export const Employee = (props) => {
    const { employee, setEmployees } = props;
    const [shouldUpdated, setShouldUpdated] = useState(false);
    const[firstName, setFirstName] = useState(employee.firstName);
    const[lastName, setLastName] = useState(employee.lastName);
    const[emailId, setEmailId] = useState(employee.emailId);
    const navigate = useNavigate();
    const editEmployee = (id) => {
        //navigate(`/update-employee/${id}`)
        setShouldUpdated(true);

    }
    const saveEmployee = () => {
        let updateEmployee = {firstName: firstName, lastName: lastName, emailId: emailId};
        new EmployeesService().updateEmployee(updateEmployee, employee.id).then(res => {
            setShouldUpdated(false);
        })
    }
    const deleteEmployee = (id) => {
        new EmployeesService().deleteEmployeeById(id).then(res => {
            setEmployees(employees => employees.filter(employee => employee.id !== id))
        })
    }
    const viewEmployee = (id) => {
        navigate(`/view-employee/${id}`);

    }
    return (
    <tr key={employee.id}>
        {
             shouldUpdated ?
             <>
             <td><input type="text" value={firstName} onChange={(e) => {setFirstName(e.target.value)}} /></td>
             <td><input type="text" value={lastName} onChange={(e) => {setLastName(e.target.value)}} /></td>
             <td><input type="text" value={emailId} onChange={(e) => {setEmailId(e.target.value)}} /></td>
             <td>
                 <button type='button' className='btn btn-info mx-2' onClick={() => saveEmployee(employee.id)}>Save</button>
                 <button type='button' className='btn btn-danger mx-2' onClick={() => setShouldUpdated(false)}>Close</button>
             </td>
             </>: 
             <>
              <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{emailId}</td>
                <td>
                    <button type='button' className='btn btn-info mx-2' onClick={() => editEmployee(employee.id)}>UPDATE</button>
                    <button type='button' className='btn btn-danger mx-2' onClick={() => deleteEmployee(employee.id)}>DELETE</button>
                    <button type='button' className='btn btn-info mx-2' onClick={() => viewEmployee(employee.id)}>VIEW</button>
                </td>
             </>
        }
        </tr>

    )

}
