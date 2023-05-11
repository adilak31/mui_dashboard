import axios from "axios"
import { useEffect, useState } from "react"
import { Status } from "../../../../shared/type"
import { Todos } from "../../type"


const listService = () => {
    const [todos, setTodos] = useState<Todos[]>([])
    const [status, setStatus] = useState<Status>('init')
    const isLoading = status === 'loading'
    const isError = status === 'error'
    const isSuccess = status === 'success'
    const fetchTodos = async () => {
        try {
            setStatus('loading')
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos/')
            setTodos(response.data)
            setStatus('success')
        }
        catch (error) {
            setStatus('error')
        }
    }
    useEffect(() => {
        fetchTodos()
    }, [])
    return { isError, isLoading, isSuccess, todos }

}

export default listService
