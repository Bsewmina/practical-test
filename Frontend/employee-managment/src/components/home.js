import React, { useState , useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

function Home (){

    const [employees, setEmployees] = useState([]);


    useEffect(() => {
        getEmployes();
    }, []);

    const getEmployes = async () => {

        const result = await axios.get("http://localhost:3006/api/v1/employee/");
        setEmployees(result.data);

    };

    const deleteEmployee = async (id) => {

        try {
            const result = await axios.delete(`http://localhost:3006/api/v1/employee/delete/${id}`);
        } catch (error) {
            alert(error)
        }
        alert('Successfully deleted employee')
        window.location.reload()
       

    }

    return (
        <div className="container">
                <h3 className="p-3 text-center">List of Employees</h3>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>EmployeeID</th>
                            <th>Name</th>
                            <th>EPF</th>
                            <th>Section</th>
                            <th>Gender</th>
                            <th>DOB</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees && employees.map(employee => <tr key={employee._id}>
                            <td>{employee.empId}</td>
                            <td>{employee.name}</td>
                            <td>{employee.epfNum}</td>
                            <td>{employee.section}</td>
                            <td>{employee.gender}</td>
                            <td>{employee.dob}</td>
                            <td>
                            <Link className='btn btn-outline-primary mx-2' to={`/update/${employee.empId}`}>Edit</Link>
                            <Link className='btn btn-danger mx-2' onClick={(e) => {deleteEmployee(employee.empId)}}>Delete</Link>
                            </td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
    )
    
}

export default Home;