import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { FormLabel, TextField, Button } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';

class InsertLang extends Component {

    render() {
        
        const { insertLang, datas } = this.props;
        
        console.log('InsertLang props data', datas)
       
    return (
            <div>
                <form>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={2}>
                            <FormLabel>외국어</FormLabel>
                        </Grid>
                        <Grid item xs={6}>
                            <Button>
                                <AddBoxIcon color="primary" variant="outlined" />
                                <FormLabel>대상언어추가</FormLabel>
                            </Button>
                        </Grid>
                    </Grid>
                            {datas.languages.map((data, index) => {
                                console.log('InsertLang map function data', data);
                                return (
                                    
                                    <Grid container spacing={2}
                                          alignItems="center" >
                                        <Grid item xs={2} key={index}>
                                            <FormLabel>{Object.keys(data)[0]}</FormLabel>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField id="out-lined-basic"
                                                        value={data[Object.keys(data)[0]]}
                                                        name="english"
                                                        onChange={insertLang} 
                                                        margin="dense" 
                                                        variant="outlined" />
                                        </Grid>
                                    </Grid> );
                            })}
                </form>
            </div>
        );
    }
}   
    
    
    

export default InsertLang;