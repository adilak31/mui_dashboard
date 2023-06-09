import { TextField, Button } from "@mui/material"
import editService from "./editService"


const Edit = () => {
    const { isLoading, formik } = editService()
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <TextField label="email" variant="outlined" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} name={'email'} error={formik.errors.email && formik.touched.email} helperText={formik.errors.email} />
                <TextField label="body" variant="outlined" value={formik.values.body} onChange={formik.handleChange} onBlur={formik.handleBlur} name={'body'} error={formik.errors.body && formik.touched.body} helperText={formik.errors.body} />
                <TextField label="name" variant="outlined" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} name={'name'} error={formik.errors.name && formik.touched.name} helperText={formik.errors.name} />
                <Button type={'submit'} variant={'contained'}>
                    send
                </Button>
            </form>
        </div>
    )
}

export default Edit
