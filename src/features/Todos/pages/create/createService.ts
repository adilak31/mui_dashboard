import axios from "axios"
import { useFormik } from "formik"
import { toast } from "react-toastify"
import * as Yup from 'yup'


const createService = () => {
    const formik = useFormik({
        initialValues: {
            title: '',
            completed: false
        },
        onSubmit: async (values) => {
            await axios.post('https://jsonplaceholder.typicode.com/todos', values)
            toast.success("success create")
        },
        validationSchema: Yup.object().shape({
            title: Yup.string().required('required')
        })
    })
    return { formik }
}

export default createService
