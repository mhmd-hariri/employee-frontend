import React, { useState } from 'react'
import { Link, useNavigate  } from 'react-router-dom';
import EmployeeService from './EmployeesService';

/**
* @author
* @function NewEmployee
**/

export const NewEmployee = (props) => {
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[emailId, setEmailId] = useState('');
    const navigate = useNavigate();

    const saveEmployee = (e) => {
        e.preventDefault();
        let employee = {firstName: firstName, lastName: lastName, emailId: emailId};
        console.log(JSON.stringify(employee));
        new EmployeeService().createEmployee(employee).then( res => {
           navigate("/employees");
        })
    }
  return(
    <div className='my-5'>
        <div className='container'>
             <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                <h3 className='text-center'>New Employee</h3>
                <div className='card-body'>
                    <form>
                        <div className='form-group my-3'>
                            <label>First Name:</label>
                            <input placeholder='First Name' name="firstname" className='form-control' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                        </div>
                        <div className='form-group my-3'>
                            <label>LastName:</label>
                            <input placeholder='Last Name' name="lastname" className='form-control' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                        </div>
                        <div className='form-group my-3'>
                            <label>Email Address:</label>
                            <input placeholder='Email Address' name="Email Address" className='form-control' value={emailId} onChange={(e) => setEmailId(e.target.value)}/>
                        </div>
                        <div className="form-group offset-md-3">
                        <button className='btn btn-success' onClick={(e)=> saveEmployee(e)} >Save</button>
                        <Link to="/employees"><button className='btn btn-danger mx-3'>Cancel</button></Link>
                        </div>
                    </form>
                </div>

                </div>

             </div>
        </div>
    </div>
   )
  }
