import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Status } from "../../../../shared/type"
import { Todos } from "../../type"


const detailsService = () => {
    const [details, setDetails] = useState<Todos>({} as Todos)
    const params = useParams()
    const [status, setStatus] = useState<Status>('init')
    const isLoading = status === 'loading'
    const isError = status === 'error'
    const isSuccess = status === 'success'
    const fetchTodos = async () => {
        try {
            setStatus('loading')
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos/' + params.id)
            setDetails(response.data)
            setStatus('success')
        }
        catch (error) {
            setStatus('error')
        }
    }
    useEffect(() => {
        fetchTodos()
    }, [])
    return { isLoading, isError, isSuccess, details }
}

export default detailsService
