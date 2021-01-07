import React, { useState } from 'react'
import axios from 'axios'
import { PrimaryButton, Dropdown } from '@fluentui/react'
import Details from './Details'

const Container = (props) => {
    const [department, setDepartment] = useState('')
    const [employeeId, setEmployeeId] = useState('')
    const [show, setShow] = useState({})


    const  hrIds = ['1','2','3','4','5']
    const engineeringIds = ['6','7','8','9','10']

    const handleDepartmentChange = (e,selectedOption) => {
        setDepartment(selectedOption.key)
    }

    const handleEmployeeIdChange = (e,selectedOption) => {
        setEmployeeId(selectedOption.key)
    }

    const getDetails = () => {
        axios.get(`https://reqres.in/api/users/${employeeId}`)
            .then((response) => {
                const result = response.data
                setShow(result.data)
            })
            .catch((err) => {
                alert(err.message)
            })
    }

    const clearAll = () => {
        setDepartment('')
        setEmployeeId('')
        setShow({})
    }

    return (
        <div>
            <div>
                <Dropdown 
                    label={'Departments:'}
                    onChange={handleDepartmentChange}
                    options={
                        [
                            {text: 'HR', key: 'hr'},
                            {text:'ENGINEERING', key: 'Engineering'}
                        ]
                    }
                    styles={{
                        dropdown: { width: 300}
                    }}
                />
            </div>
            <div>
                <Dropdown 
                    label={'Employee Id:'}
                    onChange={handleEmployeeIdChange}
                    options={
                        (department === '') ? (
                            [{text:'chose a department first', key:''}]
                        ):(
                            (department === 'hr') ? (
                                hrIds.map((e) => ({text: e, key : e}))
                            ) : (
                                engineeringIds.map((e) => ({text: e, key: e}))
                            )
                        )
                        
                    }
                    styles={{
                        dropdown: { width: 300}
                    }}
                />

            </div><br />
            <div>
                <PrimaryButton text="GetDetails" onClick={() => {
                    getDetails()
                }}/>
                <PrimaryButton text="Clear" onClick={() => {
                    clearAll()
                }}/><br />
                {show && <Details show={show}/>}
            </div>
        </div>
    )
}

export default Container