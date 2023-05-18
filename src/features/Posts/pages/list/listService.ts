import axios from "axios"
import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../../app/store"
import { Status } from "../../../../shared/type"
import { getPostsList } from "../../store/actions"
import { Post } from "../../type"



export const listService = () => {
    const dispatch = useAppDispatch()
    const postsState = useAppSelector(state => state.posts.list)
    const list = postsState.data
    const isError = postsState.status === 'error'
    const isLoading = postsState.status === 'loading'
    const isSuccess = postsState.status === 'success'


    useEffect(() => {
        dispatch(getPostsList())
    }, [])
    return {
        isError, isLoading, isSuccess, list

    }


}

export default listService
