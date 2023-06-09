import axios from "axios"
import { useFormik } from "formik"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Status } from "../../../../shared/type"
import { Comment } from "../../type"
import * as Yup from 'yup'


const editService = () => {
    const [status, setStatus] = useState<Status>('init')
    const isLoading = status === 'loading'
    const isError = status === 'error'
    const isSuccess = status === 'success'
    const params = useParams()
    const [comment, setComments] = useState<Comment>({} as Comment)
    const fetchCommnents = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments/' + params.id)
        setComments(response.data)
    }
    const formik = useFormik({
        initialValues: {
            body: comment.body,
            name: comment.name,
            email: comment.email
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
        },
        validationSchema: Yup.object().shape({
            body: Yup.string().required('required'),
            name: Yup.string().required('reequired'),
            email: Yup.string().required('required').email('email')
        }),
        enableReinitialize: true
    })
    useEffect(() => {
        fetchCommnents()
    }, [])

    return { isLoading, formik }

}

export default editService
