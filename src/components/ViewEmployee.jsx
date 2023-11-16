import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import EmployeeService from './EmployeesService';

/**
* @author
* @function ViewEmployee
**/

export const ViewEmployee = (props) => {
    const { id } = useParams();
    const [employee, setEmployee] = useState({});
    useEffect(() =>{
    new EmployeeService().getEmployeeById(id)
    .then((res) => {setEmployee(res.data)})},
    [id]);
    return (
        <div>
            <div className='card col-md-6 offset-md-3 my-3'>
                <h3 className='text-center'>View Employee Details</h3>
                <div className='card-body'>
                    <div className='row'>
                        <label>Employee First Name: {employee.firstName}</label>
                        
                    </div>
                    <div className='row'>
                        <label>Employee Last Name: {employee.lastName}</label>
                    </div>
                    <div className='row'>
                        <label>Employee Email ID: {employee.emailId}</label>
                    </div>
                </div>
            </div>

        </div>
    )
}
