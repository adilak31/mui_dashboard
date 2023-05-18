import axios from "axios"
import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../../app/store"
import { Status } from "../../../../shared/type"
import { getCommentsList } from "../../store/actions"
import { Comment } from "../../type"

export const listService = () => {
    const dispatch = useAppDispatch()
    const commentsState = useAppSelector(state => state.comments.list)
    const list = commentsState.data
    const isError = commentsState.status === 'error'
    const isLoading = commentsState.status === 'loading'
    const isSuccess = commentsState.status === 'success'


    useEffect(() => {
        dispatch(getCommentsList())
    }, [])
    return {
        isError, isLoading, isSuccess, list

    }
} 