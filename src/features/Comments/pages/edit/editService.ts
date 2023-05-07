import axios from "axios"
import { useFormik } from "formik"
import { useState } from "react"
import { useParams } from "react-router"
import { Status } from "../../../../shared/type"


const editService = () => {
    const [status, setStatus] = useState<Status>('init')
    const isLoading = status === 'loading'
    const isError = status === 'error'
    const isSuccess = status === 'success'
    const params = useParams()
    const formik = useFormik({
        initialValues: {
            body: '',
            title: '',
            email: ''
        },
        onSubmit: async (values) => {
            try {
                setStatus('loading')
                await axios.patch('https://jsonplaceholder.typicode.com/comments/' + params.id)
                setStatus('success')
            }
            catch (error) {
                setStatus('error')
            }
        }
    })

    return { isLoading, formik }

}

export default editService
