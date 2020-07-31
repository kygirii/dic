import React, { Component } from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import { Grid, Radio, RadioGroup, FormControlLabel, FormControl} from '@material-ui/core';

  class SearchLang extends Component {
    
    render() {
        
        const {selectedLangValue, filterdLanguage} = this.props;

        console.log('selectedLangValue : ', selectedLangValue)


        return (
            <div style={{width:'100%'}}>
                <FormControl component="fieldset" >
                    <FormLabel component={"legend"} style={{color: 'primary'}}>검색대상 언어</FormLabel>
                    <br/>
                    <RadioGroup style={{display: "flex", flexDirection : "row", justifyContent: 'space-around'}} aria-label={"searchLanguage"} name={"lang"} value={selectedLangValue} onChange={filterdLanguage} >

                        <FormControlLabel value="힌국어" control={<Radio/>} label="한국어" />
                        <FormControlLabel value="영어" control={<Radio/>} label="영어" />
                        <FormControlLabel value="중국어" control={<Radio/>} label="중국어" />
                        <FormControlLabel value="일본어" control={<Radio/>} label="일본어" />

                    </RadioGroup>
                </FormControl>

                    {/*<FormLabel>검색대상 언어</FormLabel>
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
                        </Grid>*/}
            </div>
        );
    }
} 

  export default SearchLang;
