import editService from "./editService"
import { TextField, Button } from "@mui/material"


const Edit = () => {
    const { isLoading, formik } = editService()
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <TextField label="body" variant="outlined" value={formik.values.body} onChange={formik.handleChange} onBlur={formik.handleBlur} name={'body'} error={formik.errors.body && formik.touched.body} helperText={formik.errors.body} />
                <TextField label="title" variant="outlined" value={formik.values.title} onChange={formik.handleChange} onBlur={formik.handleBlur} name={'title'} error={formik.errors.title && formik.touched.title} helperText={formik.errors.title} />
                <Button type={'submit'} variant={'contained'}>
                    send
                </Button>
            </form>

        </div>
    )
}

export default Edit
