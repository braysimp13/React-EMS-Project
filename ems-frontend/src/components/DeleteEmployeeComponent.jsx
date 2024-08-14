import React from "react";
import {useNavigate,useParams} from 'react-router-dom'
import {deleteEmployee} from "../services/EmployeeService"

const DeleteEmployeeComponent = () =>
{
    const {id} = useParams()
    const navigate = useNavigate()
    function employeeDelete()
    {
        deleteEmployee(id).then((response) => {console.log(response.data)})
        navigate('/employees')
    }

    function abortDelete()
    {
        navigate('/employees')
    }

    return (
        <div className = 'container'>
            <br></br>
            <div className = 'card col-md-6 offset-md-3'>
                <h1 className = 'text-center'>Do you want to delete this User?</h1>
                <div className = 'mx-auto'>
                    <button className = 'btn btn-success' onClick = {employeeDelete}>Delete</button>    <button className = 'btn btn-success' onClick = {abortDelete}>Go Back</button>      
                </div>
                <br></br>
            </div>
        </div>
    )
}

export default DeleteEmployeeComponent