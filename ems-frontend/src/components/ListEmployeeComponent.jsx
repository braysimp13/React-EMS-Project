import React, {useEffect, useState} from 'react'
import { listEmployees, deleteEmployee } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListEmployeeComponent = () =>{
 const [employees, setEmployees] = useState([])
 const navigator = useNavigate()
 useEffect(() =>{
    listEmployees().then((response) => {
        setEmployees(response.data)
    }).catch(error => {
        console.error(error)
    })
 }, [])
 
 function addNewEmployee()
 {
    navigator('/add-employee')
 }

 function employeeDelete(id)
 {
    navigator(`/delete-employee/${id}`)
 }

 function updateEmployee(id)
 {
    navigator(`/edit-employee/${id}`)
 }

 return (
    <>
        <div className='container'>
            <h1 className='text-center'>List of Employees</h1>
            <button type="button" className="btn btn-primary mb-2" onClick={addNewEmployee}>Add employee</button>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email Id</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(employee => 
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td><button type="button" className="btn btn-info" onClick={() => updateEmployee(employee.id)}>Update</button> <button type="button" className="btn btn-info" onClick={() => employeeDelete(employee.id)}>Delete</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    </>
  )
}

export default ListEmployeeComponent
