import React, { Component, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import {FormLabel, TextField, Typography} from '@material-ui/core';


export default class InsertWord extends Component {

    render() { 
    
        const { data, insertWordInfo} = this.props;
        
        console.log('용어입력 컴포넌트 props', data)
        
        

        return (
            <div>
                <form>
                            <Grid container spacing={2} alignItems="center">
                                    <Grid item xs={12}>
                                        <Typography variant="h5" component="h2" color="primary">
                                            용어입력
                                        </Typography>
                                    </Grid>
                            </Grid>
                            <Grid container spacing={2} alignItems="center">
                                        <Grid item xs={3}>
                                            <Typography variant="h6" component="h6">
                                                용어명
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={9}>
                                            <TextField id="out-lined-basic" 
                                                    placeholder="ex: 코로나"
                                                    name="name"
                                                    value={data.name}
                                                    margin="dense"
                                                    variant="outlined"
                                                    onChange={insertWordInfo}
                                            />
                                        </Grid>
                            </Grid>     
                            <Grid container spacing={2} alignItems="center" >
                                        <Grid item xs={3}>
                                            <Typography variant="h6" component="h6">
                                                범주
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={9}>
                                            <TextField id="out-lined-basic" 
                                                        placeholder="ex: 질병"
                                                        margin="dense"
                                                        name="category"
                                                        value={data.category}
                                                        onChange={insertWordInfo}
                                                        variant="outlined" />
                                        </Grid>
                            </Grid>     
                        
                            <Grid container spacing={2} alignItems="center" >
                                        <Grid item xs={3}>
                                            <Typography variant="h6" component="h6">
                                                개체명
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={9}>
                                            <TextField id="out-lined-basic" 
                                                        placeholder=""
                                                        name="entity"
                                                        value={data.entity}
                                                        onChange={insertWordInfo}
                                                        margin="dense" 
                                                        variant="outlined" />
                                        </Grid>    
                            </Grid>               
                </form>
            </div>
        );
    }
}
