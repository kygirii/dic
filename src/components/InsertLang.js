import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import {FormLabel, TextField, Button, Typography} from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';

class InsertLang extends Component {

    render() {
        
        const { insertLang, datas } = this.props;
        
        console.log('InsertLang props data', datas)
       
    return (
            <div>
                <form>
                    <Grid container>
                        <Grid item xs={6}>
                            <Typography variant="h5" component="h2" color="primary">
                                외국어
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Button style={{borderRadius:20, float:'right'}}
                                    variant="contained"
                                    color="primary"
                                    startIcon={<AddBoxIcon />}
                            >
                                대상언어추가
                            </Button>
                        </Grid>
                    </Grid>
                            {datas.languages.map((data, index) => {
                                console.log('InsertLang map function data', data);
                                return (
                                    <Grid container spacing={2} alignItems="center" >
                                        <Grid item xs={3} key={index}>
                                            <Typography variant="h6" component="h6">
                                                {Object.keys(data)[0]}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={9}>
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