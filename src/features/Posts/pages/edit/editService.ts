import axios from "axios"
import { useFormik } from "formik"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Status } from "../../../../shared/type"
import { Post } from "../../type"
import * as Yup from 'yup'


const editService = () => {

    const params = useParams()
    const [status, setStatus] = useState<Status>('init')
    const isLoading = status === 'loading'
    const isError = status === 'error'
    const isSuccess = status === 'success'
    const [post, setPost] = useState<Post>({} as Post)
    const fetchPost = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + params.id)
        setPost(response.data)
    }

    const formik = useFormik({
        initialValues: {

            title: post.title,
            body: post.body
        },
        validationSchema: Yup.object().shape({
            title: Yup.string().required('required'),
            body: Yup.string().required('required')
        }),
        onSubmit: async (values) => {
            try {
                setStatus('loading')
                await axios.patch('https://jsonplaceholder.typicode.com/posts/' + params.id)
                setStatus('success')
            }
            catch (error) {
                setStatus('error')
            }
        },
        enableReinitialize: true


    })
    useEffect(() => {
        fetchPost()
    }, [])

    return { isLoading, formik }

}

export default editService
