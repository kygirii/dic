import React, { Component } from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import { Grid, Radio, RadioGroup, FormControlLabel} from '@material-ui/core';

  class SearchLang extends Component {
    
    render() {
        
        const {selectedLangValue, filterdLanguage, } = this.props;


        console.log('selectedLangValue : ', selectedLangValue)

        return (
            <div>

                    <FormLabel>검색대상 언어</FormLabel>
                        <Grid container spacing={2}>
                            <RadioGroup aria-label="language" 
                                        name="language1" 
                                        value={selectedLangValue} 
                                        onChange={filterdLanguage}>
                                <FormControlLabel 
                                                  value="korean" 
                                                  control={<Radio />} 
                                                  label="Korean" />
                                <FormControlLabel 
                                                  value="english" 
                                                  control={<Radio />} 
                                                  label="English" />
                                <FormControlLabel 
                                                  value="china" 
                                                  control={<Radio />} 
                                                  label="China" />
                                <FormControlLabel 
                                                  value="japanese" 
                                                  control={<Radio />} 
                                                  label="Japanese" />
                            </RadioGroup>
                        </Grid>
            </div>
        );
    }
} 

  export default SearchLang;
