import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { useAppDispatch, useAppSelector } from "../../../../app/store"
import { Status } from "../../../../shared/type"
import { getCommentsDetail } from "../../store/actions"
import { Comment } from "../../type"


const detailsService = () => {
    const dispatch = useAppDispatch()
    const detailInfo = useAppSelector(state => state.comments.detail)
    const params = useParams()

    const isLoading = detailInfo.status === 'loading'
    const isError = detailInfo.status === 'error'
    const isSuccess = detailInfo.status === 'success'

    useEffect(() => {
        dispatch(getCommentsDetail(params.id))
    }, [])
    return { isError, isLoading, isSuccess, details: detailInfo.data }
}

export default detailsService
