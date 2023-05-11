import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button, Stack } from "@mui/material"
import { NavLink } from "react-router-dom"
import listService from "./listService"
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import AddIcon from '@mui/icons-material/Add'
import InfoIcon from '@mui/icons-material/Info';

export const TodosList = () => {
    const { isError, isLoading, isSuccess, todos } = listService()
    return (
        <div>
            {isLoading ? 'loading' : null}
            {isError ? 'error' : null}
            {isSuccess ?
                <TableContainer component={Paper}>
                    <Stack direction={'row'} justifyContent={"space-between"}>
                        <h1>TODOS</h1>
                        <Button variant="outlined" size="small" sx={{ height: "80px" }} >
                            <NavLink to={"/todos/create"}>
                                <AddIcon />
                            </NavLink>
                        </Button>
                    </Stack>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell > TITLE</TableCell>
                                <TableCell >COMPLETED</TableCell>


                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {todos.map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.id}
                                    </TableCell>
                                    <TableCell align="right">{row.title}</TableCell>
                                    <TableCell align="right">{row.completed ? "yes" : 'no'}</TableCell>
                                    <TableCell>
                                        <Button>
                                            <NavLink to={"/todos/details/" + row.id}>
                                                <InfoIcon />
                                            </NavLink>
                                        </Button>
                                        <Button>
                                            <NavLink to={"/todos/edit/" + row.id}>
                                                <ModeEditIcon />
                                            </NavLink>
                                        </Button>
                                    </TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                : null}


        </div>
    )
}