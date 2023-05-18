import axios from "axios"
import { useFormik } from "formik"
import { toast } from "react-toastify"
import * as Yup from 'yup'
import { useAppDispatch, useAppSelector } from "../../../../app/store"
import { createTodos } from "../../store/actions"


const createService = () => {
    const dispatch = useAppDispatch()
    const createStatus = useAppSelector(state => state.todos.create.status)
    const isLoading = createStatus === 'loading'
    const formik = useFormik({
        initialValues: {
            title: '',
            completed: false
        },
        onSubmit: async (values) => {
            dispatch(createTodos(values))

        },
        validationSchema: Yup.object().shape({
            title: Yup.string().required('required')
        })
    })
    return { formik, isLoading }
}

export default createService
