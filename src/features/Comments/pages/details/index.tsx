
import detailsService from './detailsService'

const Details = () => {
    const { isLoading, isError, isSuccess, details } = detailsService()
    return (
        <div>
            {isLoading ? 'loading' : null}
            {isError ? 'error' : null}
            {isSuccess ? details.body : null}

        </div>
    )
}

export default Details
