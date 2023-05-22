import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { useAppDispatch, useAppSelector } from "../../../../app/store"
import { Status } from "../../../../shared/type"
import { getTodosDetail } from "../../store/actions"
import { Todos } from "../../type"


const detailsService = () => {
    const dispatch = useAppDispatch()
    const detailInfo = useAppSelector(state => state.todos.detail)
    const params = useParams()
    const isLoading = detailInfo.status === 'loading'
    const isError = detailInfo.status === 'error'
    const isSuccess = detailInfo.status === 'success'

    useEffect(() => {
        dispatch(getTodosDetail(params.id))
    }, [])
    return { isLoading, isError, isSuccess, details: detailInfo.data }
}

export default detailsService
