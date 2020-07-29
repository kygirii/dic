import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';


const SearchWord = (props) => {
    const { changeKeyword, searchBtnOnClick } = props; 
    return (
      <div>
            <FormLabel>검색</FormLabel>
                <Paper>
                    <Grid container>
                        <Grid item xs={8}>
                        <Grid container 
                              justify="center" 
                              alignItems="center" 
                              sapcing={2}>
                            <Grid item xs={2}>
                                <FormLabel>질의어</FormLabel>
                            </Grid>
                            <Grid item xs={6}>
                                    <TextField
                                        id="outlined-basic"
                                        margin="dense"
                                        label="type word" 
                                        variant="outlined"
                                        value={props.keyword}
                                        onChange = {changeKeyword}
                                        />
                            </Grid>
                            <Grid item xs={4}>
                                    <Button className="searchBtn" 
                                            onClick={searchBtnOnClick} 
                                            variant="contained" 
                                            color="primary"> 
                                        검색
                                    </Button>
                            </Grid>
                        </Grid>
                        </Grid>
                    </Grid>

                </Paper>   
        </div>      
    );
};

export default SearchWord;
