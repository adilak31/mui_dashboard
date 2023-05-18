import { TextField, Button, Switch } from "@mui/material"
import createService from "./createService"

export const CreateTodos = () => {
    const { formik, isLoading } = createService()
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <TextField label="title" variant="outlined" value={formik.values.title} onChange={formik.handleChange} onBlur={formik.handleBlur} name={'title'} error={formik.errors.title && formik.touched.title} helperText={formik.errors.title} />
                <Switch
                    checked={formik.values.completed}
                    name={'completed'}
                    onChange={formik.handleChange}

                />
                <Button type={'submit'} variant={'contained'} disabled={isLoading}>
                    {isLoading ? 'loading' : 'send'}
                </Button>
            </form>
        </div>
    )

}