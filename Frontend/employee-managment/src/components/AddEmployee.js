import axios from "axios";
import Form from "react-bootstrap/Form"; import { useState } from "react";

function AddEmployee() {

    const [ID, setID] = useState('');
    const [DOB, setDOB] = useState('');
    const [Name, setName] = useState('');
    const [EPF, setEPF] = useState('');
    const [Gender, setGender] = useState('');
    const [Section, setSection] = useState('');
    
    const postData = async (e) => {

        e.preventDefault()
        const employee = { 
            empId: ID,
            name: Name,
            epfNum: EPF,
            section: Section,
            gender: Gender,
            dob: DOB,
        }
        try {
            
            const res = await axios.post('http://localhost:3006/api/v1/employee/', employee)
            console.log(res.data)

            alert('Customer Successfully Added')

        } catch (e) {
        alert(e)
        }
    }

    return (
        <div >
            <div className="container">
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label htmlFor="inputID">EmployeeID</label>
                    <input type="number" className="form-control" placeholder="0001" onChange={(e) => setID(e.target.value)}/>
                    </div>
                    <div className="form-group col-md-6">
                    <Form.Group >
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control type="date" name="dob" placeholder="Date of Birth" onChange={(e) => setDOB(e.target.value)} />
                        </Form.Group>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label htmlFor="inputName">Name</label>
                    <input type="text" className="form-control" placeholder="John " onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group col-md-6">
                    <label htmlFor="inputEPF">EPF Number</label>
                    <input type="number" className="form-control" placeholder="11342 13 " onChange={(e) => setEPF(e.target.value)} />
                    </div>
                    
                </div>
                <div className="form-row">
                <div className="form-check form-check-inline" >
                    <input className="form-check-input" type="radio" name="inlineRadioOptions"  id="inlineRadio1" value='Male' onChange={(e) => setGender(e.target.value)}/>
                    <label className="form-check-label" for="inlineRadio1">M</label>
                    </div>
                    <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Female" onChange={(e) => setGender(e.target.value)}/>
                    <label className="form-check-label" for="inlineRadio2">F</label>
                    </div>
                    <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="Other" onChange={(e) => setGender(e.target.value)}/>
                    <label className="form-check-label" for="inlineRadio3">Other</label>
                    </div>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputMobile">Section</label>
                    <select class="form-select" aria-label="Default select example" onChange={(e) => setSection(e.target.value)}>
                        <option selected value="IT">IT</option>
                        <option value="HR">HR</option>
                        <option value="Finance">Finance</option>
                        <option value="Production">Production</option>
                        <option value="Manufacturing">Manufacturing</option>
                        </select>
                    </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <button onClick={postData} type="submit" className="btn btn-primary">Create Customer</button>
                    </div>
                </div>
                
            </form>
            </div>
        </div>
    )
}

export default AddEmployee;