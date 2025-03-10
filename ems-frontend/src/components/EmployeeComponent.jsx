import React, {useState} from "react";
import {createEmployee, updateEmployee} from "../services/EmployeeService"
import { useNavigate, useParams} from 'react-router-dom'

const EmployeeComponent = () => 
{
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const [errors, setErrors] = useState(
        {
            firstName: '',
            lastName:'',
            email: ''
        }
    );
    const {id} = useParams();
    const navigator = useNavigate()
    function handleFirstName(e)
    {
        setFirstName(e.target.value)
    }

    function handleLastName(e)
    {
        setLastName(e.target.value)
    }

    function handleEmail(e)
    {
        setEmail(e.target.value)
    }

    function saveEmployee(e)
    {
        // Prevent defualt activities while submitting form
        e.preventDefault();

        if(validateForm())
        {
            const employee = { 
                firstName, lastName, email                
            }
            
            if(id) {
                updateEmployee(employee,id).then((response) => {
                    console.log(response.data);
                    navigator('/employees');
                })
            }
            else
            {
                createEmployee(employee).then((response) => {
                    console.log(response.data);
                    navigator('/employees');
                })
            }   
        } 
    }

    function validateForm()
    {
        let valid = true;

        const errorsCopy = {... errors};

        if(firstName.trim()){
            errorsCopy.firstName = '';
        } else {
            errorsCopy.firstName = 'First name is required';
            valid = false;
        }

        if(email.trim()){
            errorsCopy.email = '';
        } else {
            errorsCopy.email = 'Email is required';
            valid = false;
        }

        if(lastName.trim()){
            errorsCopy.lastName = '';
        } else {
            errorsCopy.lastName = 'Last Name is required';
            valid = false;
        }
        
        setErrors(errorsCopy)
        return valid;
    }

    function pageTitle()
    {
        if(id)
        {
            return "Update Employee";
        }

        return "Add Employee";
    }

    return (
        <div className='container'>
            <br></br>
            <div className='row'>
                <div className = 'card col-md-6 offset-md-3'>
                    {<h2 className='text-center'>{pageTitle()}</h2>}
                    <div className="card-body">
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>First Name: </label>
                                <input type='text' placeholder='Enter Employee First Name' name='firstName' value={firstName} className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} onChange={handleFirstName}></input>
                                { errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Last Name: </label>
                                <input type='text' placeholder='Enter Employee Last Name' name='lastName' value={lastName} className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} onChange={handleLastName}></input>
                                { errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Email: </label>
                                <input 
                                    type='text' 
                                    placeholder='Enter Employee Email' 
                                    name='email' value={email} 
                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`} 
                                    onChange={handleEmail}>
                                </input>
                                { errors.email && <div className="invalid-feedback">{errors.email}</div>}
                            </div>

                            <button className='btn btn-success' onClick={saveEmployee}>Submit</button>
                        </form>

                    </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default EmployeeComponent