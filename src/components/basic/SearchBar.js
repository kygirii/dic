import React, { Component } from 'react';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { FormControl, Typography, Grid, Menu, MenuItem, withStyles } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import clsx from 'clsx';

const useStyles = theme => ({
    root : {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin : {
        margin : theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: "25ch",
    },
});

class SearchBar extends Component {

    constructor(props){
        super(props);
        this.state= { 
            searchLang : '',
            anchorEl : null,
        }
        
    }

    handleClick = (event) => {
        this.setState({anchorEl : event.currentTarget});
        console.log('event.currentTarget', event.currentTarget)
    };

    handleClose = (event) => {
        this.setState({anchorEl : null})
        this.setState({searchLang : event.target.innerText}, ()=>{

            console.log('searchLang', event.currentTarget.innerText);
        }) 
       
    };

    classes = useStyles();

 


    render() {
       const style={
           height : '50px',
           padding : '24px',
           justify : 'center',
       }
       const classes = useStyles();
       const { changeKeyword, searchBtnOnClick, keyword } = this.props; 

       console.log('in the render searchLang', this.state.searchLang);

       
        return (
            
            <div style={style}>
                <Grid container>
                    <Grid item xs={4} container >
                           
                    </Grid> 
                </Grid>
                     <Grid container alignItems="center" direction="row" justify="center" spacing={2} > 
                        <Grid item xs={4} container >
                            <Typography>질의어 {this.state.searchLang}</Typography>
                        </Grid>
                        <Grid item xs={6} container alignItems="center" justify="center">
                            <Grid item xs={10}>
                                {/*<FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>*/}
                                {/*    <Input*/}
                                {/*           id="standard-adornment"*/}
                                {/*           value={keyword}*/}
                                {/*           onChange = {changeKeyword}*/}
                                {/*           endAdornment={*/}
                                {/*                            <InputAdornment position="end">*/}
                                {/*                                <IconButton type="submit" aria-label="search" style={{backgroundColor:"#fff"}}>*/}
                                {/*                                    <SearchIcon onClick={searchBtnOnClick}/>*/}
                                {/*                                </IconButton>*/}
                                {/*                            </InputAdornment>*/}
                                {/*                        }*/}
                                {/*           inputProps={{'aria-label': 'keyword',}}*/}
                                {/*    />*/}
                                {/*</FormControl>*/}
                                <InputBase
                                placeholder={"검색어 입력"}
                                inputProps={{ 'aria-label': 'Search' }}
                             onChange = {changeKeyword}
                                value={keyword}
                                />
                            </Grid>
                                <Divider orientation="vertical" flexItem />
                            <Grid item xs={1}>
                                <IconButton color="primary" aria-label="More Contents" >
                                    <MoreVertIcon aria-controls="simple-menu" aria-aria-haspopup="true" onClick={this.handleClick}/>
                                </IconButton>
                                <Menu
                                    id="simple-menu"
                                    anchorEl={this.state.anchorEl}
                                    keepMounted
                                    open={Boolean(this.state.anchorEl)}
                                    onClose={this.handleClose}
                                >
                                    <MenuItem onClick={this.handleClose} value="한국어">한국어</MenuItem>
                                    <MenuItem onClick={this.handleClose} value="영어">영어</MenuItem>
                                    <MenuItem onClick={this.handleClose} value="중국어">중국어</MenuItem>
                                    <MenuItem onClick={this.handleClose} value="일본어">일본어</MenuItem>
                                </Menu>
                            </Grid>
                        </Grid>
                        <Grid item xs={2}>
                            <IconButton type="submit" aria-label="search" style={{backgroundColor:"#fff"}}>
                                <SearchIcon 
                                    onClick={searchBtnOnClick} 
                                />
                            </IconButton>
                        </Grid>
                        
                </Grid>

            </div>
               
        );
    }
}

export default SearchBar;