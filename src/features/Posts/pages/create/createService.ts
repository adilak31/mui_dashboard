import axios from "axios"
import { useFormik } from "formik"
import { useState } from "react"
import { useParams } from "react-router"
import { toast } from "react-toastify"
import { Status } from "../../../../shared/type"
import * as Yup from 'yup'
import { useAppDispatch, useAppSelector } from "../../../../app/store"
import { createPost } from "../../store/actions"


const createService = () => {
    const dispatch = useAppDispatch()
    const createStatus = useAppSelector(state => state.posts.create.status)
    const isError = createStatus === 'error'
    const isLoading = createStatus === 'loading'
    const isSuccess = createStatus === 'success'


    const formik = useFormik({
        initialValues: {

            title: '',
            body: ''
        },
        onSubmit: async (values) => {
            dispatch(createPost(values))

        },
        validationSchema: Yup.object().shape({

            title: Yup.string().required('requires'),
            body: Yup.string().required('required')
        })
    })
    return { isLoading, formik }

}
export default createService


