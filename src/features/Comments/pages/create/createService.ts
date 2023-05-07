import axios from "axios"
import { useFormik } from "formik"
import { useEffect, useState } from "react"
import { Status } from "../../../../shared/type"
import { Comment } from "../../type"
import { ToastContainer, toast } from 'react-toastify'
import * as Yup from 'yup'


export const createService = () => {
    const [status, setStatus] = useState<Status>('init')
    const formik = useFormik({
        initialValues:
        {
            body: '',
            title: '',
            email: ''
        },
        onSubmit: async (values) => {
            try {
                setStatus('loading')
                await axios.post('https://jsonplaceholder.typicode.com/comments', values)
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
            email: Yup.string().required('requiredd').email('format is  not email'),
            title: Yup.string().required('requires'),
            body: Yup.string().required('required')
        })

    })
    return { status, formik }
}

