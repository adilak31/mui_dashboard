import axios from "axios"
import { useFormik } from "formik"
import { useState } from "react"
import { useParams } from "react-router"
import { toast } from "react-toastify"
import { Status } from "../../../../shared/type"
import * as Yup from 'yup'


const createService = () => {
    const [status, setStatus] = useState<Status>('init')
    const isLoading = status === 'loading'
    const isError = status === 'error'
    const isSuccess = status === 'success'
    const params = useParams()
    const formik = useFormik({
        initialValues: {

            title: '',
            body: ''
        },
        onSubmit: async (values) => {
            try {
                setStatus('loading')
                await axios.post('https://jsonplaceholder.typicode.com/comments/', values)
                setStatus('success')
                toast.success('🦄 Wow so easy!', {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })

            }
            catch (error) {
                setStatus('error')
                toast.error('error', {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
            }
        },
        validationSchema: Yup.object().shape({

            title: Yup.string().required('requires'),
            body: Yup.string().required('required')
        })
    })
    return { status, formik }

}
export default createService


