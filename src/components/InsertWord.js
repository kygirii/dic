import React, { Component, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { FormLabel, TextField } from '@material-ui/core';


class InsertWord extends Component {

    render() { 
    
        const { data, insertWordInfo} = this.props;
        
        console.log('용어입력 컴포넌트 props', data)
        
        

        return (
            <div>
                <form>

                            <Grid container spacing={2} alignItems="center">
                                    <Grid item xs={4}>
                                        <FormLabel>용어입력</FormLabel>
                                    </Grid>
                            </Grid>
                            <Grid container spacing={2} alignItems="center" >
                                        <Grid item xs={2}>
                                            <FormLabel>용어명</FormLabel>
                                        </Grid>
                                        <Grid item xs={6}>
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
                                        <Grid item xs={2}>
                                            <FormLabel>범주</FormLabel>
                                        </Grid>
                                        <Grid item xs={6}>
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
                                        <Grid item xs={2}>
                                            <FormLabel>개체명</FormLabel>
                                        </Grid>
                                        <Grid item xs={6}>
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

export default InsertWord;