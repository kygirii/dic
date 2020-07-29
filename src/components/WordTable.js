import React, { Component } from 'react';
import { TableHead, TableCell, TableBody, TableRow, Table, Checkbox } from '@material-ui/core';

class WordTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checkedValues: []
        }
    }

   
    // handleCheck(x) {
    //     this.setState(state => ({
    //         checkedValues: state.checkedValues.inclueds(x)
    //         ? state.checkedValues.filter(c => c !== x)
    //         : [...state.checkedValues, x]
    //     }));
    // }


    render () {
        console.log('checked', this.state.checked);
        const { data, check } = this.props;

        return (
            <div>
                <Table align='center' variant="contained">
                    <TableHead>
                        <TableRow>
                            <TableCell>No.</TableCell>
                            <TableCell>용어명</TableCell>
                            <TableCell>범주</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            data.map(( o, index)=>{
                                return (
                                <TableRow key={o.name + "_"+ index}>
                                    <TableCell>
                                        <Checkbox value={o.name} 
                                                  name={o.name}
                                                  onClick={check}
                                                  />{index + 1}
                                    </TableCell>
                                    <TableCell>{o.name}</TableCell>
                                    <TableCell>{o.category}</TableCell>
                                </TableRow>);   
                            })

                        }
                    </TableBody>
                </Table>
            </div>
        );
    }
}

export default WordTable;