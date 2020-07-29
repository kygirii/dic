import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { FormLabel, TextField, Button } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';

class Relationship extends Component {

    render() {
        const { insertRelation, datas, key } = this.props;

        return (
            <div style={{flexGrow:1}}>
                 <Grid container spacing={2} alignItems="center">
                        <Grid item xs={1}>
                            <FormLabel>용어관계</FormLabel>
                        </Grid>
                        <Grid item xs={2}>
                            <Button>
                                <AddBoxIcon color="primary"/>
                                <FormLabel>용어관계 항목 추가</FormLabel>
                            </Button>
                        </Grid>
                </Grid>
                            <Grid container spacing={2}>
                                {
                                    datas.relations.map((data) => {
                                        console.log('relations data', data);
                                        return (
                                            
                                            <Grid item xs alignItems="center">
                                                <FormLabel>{Object.keys(data)[0]}</FormLabel>
                                                <TextField id="out-lined-basic" 
                                                            name={data[Object.keys(data)[0]] }
                                                            value={data[Object.keys(data)[0]]}
                                                            onChange={insertRelation}
                                                            margin='normal' 
                                                            variant="outlined" 
                                                />
                                            </Grid>
                                        )
                                    }) 
                                }
                                
                            </Grid>

               
            </div>
       ); 
   }
}

export default Relationship;