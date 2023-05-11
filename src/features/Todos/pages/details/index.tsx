import detailsService from "./detailsService"


const DetailsTodos = () => {
    const { isLoading, isError, isSuccess, details } = detailsService()
    return (
        <div>
            {isLoading ? 'loading' : null}
            {isError ? 'error' : null}
            {isSuccess ? details.title : null}
        </div>
    )
}

export default DetailsTodos
