import React, { Component } from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import { Grid, Radio, RadioGroup, FormControlLabel, FormControl} from '@material-ui/core';

  class SearchLang extends Component {
    
    render() {
        
        const {selectedLangValue, filterdLanguage} = this.props;

        console.log('selectedLangValue : ', selectedLangValue)


        return (
            <div>
                <FormControl component="fieldset">
                    <FormLabel component={"legend"}>검색대상언어</FormLabel>
                    <RadioGroup style={{display: "flex", width: "auto", flexDirection : "row"}} aria-label={"searchLanguage"} name={"lang"} defaultValue={selectedLangValue} onChange={filterdLanguage}>

                        <FormControlLabel value="힌국어" control={<Radio/>} label="한국어" />
                        <FormControlLabel value="영어" control={<Radio/>} label="영어" />
                        <FormControlLabel value="중국어" control={<Radio/>} label="중국어" />
                        <FormControlLabel value="일본어" control={<Radio/>} label="본어" />

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
