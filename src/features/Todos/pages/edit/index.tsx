import { TextField, Button } from "@mui/material"
import editService from "./editService"

const EditTodos = () => {
    const { isLoading, formik } = editService()

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <TextField label="title" variant="outlined" value={formik.values.title} onChange={formik.handleChange} onBlur={formik.handleBlur} name={'title'} error={formik.errors.title && formik.touched.title} helperText={formik.errors.title} />
                <Button type={'submit'} variant={'contained'}>
                    send
                </Button>
            </form>
        </div>
    )
}

export default EditTodos
