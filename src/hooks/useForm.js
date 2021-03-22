// write your custom hook here to control your checkout form
import { useState } from 'react'

const useForm = () => {
    const [values, setValues] = useState([])
    const [successMsg, setSuccessMsg] = useState(false)

    const handleSubmit = (e) => {
        if (e) {
            e.preventDefault()
        }
        setSuccessMsg(true)
    }

    const handleChanges = (e) => {
        setValues({...values, [e.target.name]: e.target.value })
    }

    return [values, successMsg, handleChanges, handleSubmit]

}

export default useForm
