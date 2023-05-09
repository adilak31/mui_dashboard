import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button, Stack } from "@mui/material"
import InfoIcon from '@mui/icons-material/Info';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { NavLink } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add'
import listService from "./listService"


export const List = () => {
    const { isLoading, isError, isSuccess, list } = listService()
    return (
        <div>

            <Stack direction={'row'} justifyContent={"space-between"}>
                <h1>Posts</h1>
                <Button variant="outlined" size="small" sx={{ height: "80px" }} >
                    <NavLink to={"/posts/create"}>
                        <AddIcon />
                    </NavLink>
                </Button>
            </Stack>
            {isLoading ? 'loading' : null}
            {isError ? 'error' : null}
            {isSuccess ?

                <TableContainer component={Paper}>
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell ></TableCell>
                                <TableCell >TITLE</TableCell>
                                <TableCell >BODY</TableCell>
                                <TableCell ></TableCell>




                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {list.map((row) => (
                                <TableRow
                                    key={row.id}

                                >
                                    <TableCell component="th" scope="row">
                                        {row.id}
                                    </TableCell>
                                    <TableCell >{row.id}</TableCell>
                                    <TableCell >{row.title}</TableCell>
                                    <TableCell >{row.body}</TableCell>
                                    <TableCell >
                                        <Button>
                                            <NavLink to={"/posts/details/" + row.id}>
                                                <InfoIcon />
                                            </NavLink>
                                        </Button>
                                        <Button>
                                            <NavLink to={"/posts/edit/" + row.id}>
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