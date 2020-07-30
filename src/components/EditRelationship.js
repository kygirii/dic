import React, { Component } from 'react';
import { FormLabel, TextField, Button, Grid, Typography} from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';

export default class Relationship extends Component {

    render() {
        const { insertRelation, datas } = this.props;

        return (
            <div>
                <Grid container item xs={12} spacing={2}>
                        <Grid item xs={6}>
                            <Typography variant="h5" component="h2" color="primary">
                                용어관계
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Button style={{borderRadius:20, float:'right'}}
                                variant="contained"
                                color="primary"
                                startIcon={<AddBoxIcon />}
                            >
                                용어관계 항목 추가
                            </Button>
                        </Grid>
                    <Grid container item xs={12}>
                        {
                            datas.relations.map((data) => {
                                return (
                                    <Grid item xs={12} lg={6} style={{padding:10}}>
                                        <Typography variant="h6" component="h6" style={{display:'inline-block', width:100}}>
                                            {Object.keys(data)[0]}
                                        </Typography>
                                        <TextField id="out-lined-basic" style={{display:'inline'}}
                                                   name={data[Object.keys(data)[0]]}
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
                </Grid>
            </div>
        );
    }
}