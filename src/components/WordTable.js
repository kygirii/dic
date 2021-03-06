import React, { Component } from 'react';
import {TableHead, TableCell, TableBody, TableRow, Table, Checkbox, Paper, TablePagination } from '@material-ui/core';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TableContainer from '@material-ui/core/TableContainer';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    // root: {
    //     '&:nth-of-type(odd)': {
    //         backgroundColor: theme.palette.action.hover,
    //     },
    // },
}))(TableRow);

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
        borderRadius:50,
        width: '100%',
    },
    table: {
        minWidth: 700,
    },
});



export default class WordTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checkedValues: [],
            page: 0,
            rowsPerPage: 4,
        }
    }

   
    // handleCheck(x) {
    //     this.setState(state => ({
    //         checkedValues: state.checkedValues.inclueds(x)
    //         ? state.checkedValues.filter(c => c !== x)
    //         : [...state.checkedValues, x]
    //     }));
    // }

    handleChangePage = (event, newPage) => {
        this.setState({page : newPage});
    }

    handleChangeRowsPerPage = (event) => {
        this.setState({rowsPerPage : +event.target.value});
    }

    render () {
        console.log('checked', this.state.checked);
        const { data, check } = this.props;
        const classes = this.props;
        const {page, rowsPerPage} = this.state;


        return (
            <div>
                <Paper className={classes.root}>
                    <TableContainer className={classes.container} >
                        <Table stickyHeader aria-label="search result table" >
                            <TableHead>
                                <TableRow style={{backgroundColor:'#000000', color: 'white',}}>
                                    <StyledTableCell align={'center'}>No.</StyledTableCell>
                                    <StyledTableCell align={'center'}>용어명</StyledTableCell>
                                    <StyledTableCell align={'center'}>범주</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(( o, index)=>{
                                        return (
                                        <StyledTableRow hover role="checkbox" tabIndex={-1} key={o.name + "_"+ index}>
                                            <StyledTableCell component="th" align={'center'}>
                                                <Checkbox value={o.name}
                                                          name={o.name}
                                                          onClick={check}
                                                          />{o.id}
                                            </StyledTableCell>
                                            <StyledTableCell align={'center'}>{o.name}</StyledTableCell>
                                            <StyledTableCell align={'center'}>{o.category}</StyledTableCell>
                                        </StyledTableRow>);
                                    })

                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={data.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={this.handleChangePage}
                        onChangeRowsPerPage={this.handleChangeRowsPerPage}
                    />
                </Paper>
            </div>
        );
    }
}
