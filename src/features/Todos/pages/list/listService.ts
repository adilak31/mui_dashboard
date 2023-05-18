import axios from "axios"
import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../../app/store"
import { Status } from "../../../../shared/type"
import { getTodosList } from "../../store/actions"
import { Todos } from "../../type"


const listService = () => {
    const dispatch = useAppDispatch()
    const todosState = useAppSelector((state) => state.todos.list)
    const todos = todosState.data
    const isError = todosState.status === 'error'
    const isLoading = todosState.status === 'loading'
    const isSuccess = todosState.status === 'success'



    useEffect(() => {
        dispatch(getTodosList())
    }, [])
    return { isError, isLoading, isSuccess, todos }

}

export default listService
