import { useFormik } from "formik"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Status } from "../../../../shared/type"
import { Todos } from "../../type"
import * as Yup from 'yup'
import axios from "axios"


const editService = () => {
    const [todos, setTodos] = useState<Todos>({} as Todos)
    const [status, setStatus] = useState<Status>('init')
    const isLoading = status === 'loading'
    const isError = status === 'error'
    const isSuccess = status === 'success'
    const params = useParams()
    const fetchTodos = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/' + params.id)
        setTodos(response.data)
    }
    const formik = useFormik({
        initialValues: {
            title: todos.title
        },
        onSubmit: async (values) => {
            try {
                setStatus('loading')
                await axios.patch('https://jsonplaceholder.typicode.com/todos/' + params.id)
                setStatus('success')
            }
            catch (error) {
                setStatus('error')
            }
        },
        validationSchema: Yup.object().shape({
            title: Yup.string().required('required')
        }),
        enableReinitialize: true

    })
    useEffect(() => {
        fetchTodos()
    }, [])

    return { isLoading, formik }
}

export default editService


