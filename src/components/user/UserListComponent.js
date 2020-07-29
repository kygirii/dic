import React, { Comnent, Component } from 'react';


class UserListComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            message: null
        }
    }

    addUser = () => {
        window.localStorage.removeItem("userID");
        this.props.history.push('/add-user');
    }

    render() {
        return(
            <div>
                <Typography variant="h4" style={style}>UserList</Typography>
                <Button variant="contained" color="primary" onClick={this.addUser}>Add User</Button>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>FirstName</TableCell>
                            <TableCell align="right">LastName</TableCell>
                            <TableCell align="right">UserName</TableCell>
                            <TableCell align="right">Age</TableCell>
                            <TableCell align="right">Salary</TableCell>
                            <TableCell align="right">Edit</TableCell>
                            <TableCell align="right">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.users.map( user => 
                            <TableRow key={user.id}>
                                <TableCell Component="th" scope="user">{user.id}</TableCell>
                            </TableRow>
                            )}
                    </TableBody>
                </Table>
            </div>
        )
    }
}