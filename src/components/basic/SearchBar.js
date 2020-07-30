import React, { Component } from 'react';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { Typography, Grid, Menu, MenuItem, Input, FormControl, InputAdornment } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import clsx from 'clsx';
import makeStyles from "@material-ui/core/styles/makeStyles";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '359px',
    },
}));



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

    render() {
       const style={
           height : '50px',
           padding : '24px',
           justify : 'center',
       }
       const { changeKeyword, searchBtnOnClick, keyword } = this.props; 

       console.log('in the render searchLang', this.state.searchLang);
        const classes = this.props;
       
        return (
            
            <div style={style}>
                {/*<Grid container>*/}
                {/*    <Grid item xs={4} container >*/}
                {/*           */}
                {/*    </Grid> */}
                {/*</Grid>*/}
                     <Grid container alignItems="center" direction="row" justify="center" spacing={6} >
                        <Grid item xs={4} container >
                            <Typography>질의어 {this.state.searchLang}</Typography>
                        </Grid>
                        <Grid item xs={6} container alignItems="center" justify="center" >
                            <Grid item xs={20}>
                                <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
                                    <Input
                                        id="standard-adornment-search"
                                        value={keyword}
                                        onChange={changeKeyword}
                                        endAdornment={
                                                        <InputAdornment position="end">
                                                            <IconButton type="submit" aria-label="search" style={{backgroundColor:"#fff"}}>
                                                                <SearchIcon
                                                                onClick={searchBtnOnClick}
                                                                />
                                                            </IconButton>
                                                        </InputAdornment>
                                                     }
                                        inputProps={{'aria-label' : 'search'}}
                                        placeholder={"검색어를 입력해주세요"}
                                    />
                                </FormControl>
                                {/*                <InputBase
                                    placeholder={"검색어를 입력해주세요"}
                                    inputProps={{ 'aria-label': 'Search' }}
                                    onChange = {changeKeyword}
                                    value={keyword}
                                />*/}
                            </Grid>
                                {/*<Divider orientation="vertical" flexItem />*/}
                          {/*  <Grid item xs={1}>
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
                        </Grid>*/}
                       {/* <Grid item xs={2}>
                            <IconButton type="submit" aria-label="search" style={{backgroundColor:"#fff"}}>
                                <SearchIcon 
                                    onClick={searchBtnOnClick} 
                                />
                            </IconButton>
                        </Grid>*/}
                        </Grid>
                </Grid>

            </div>
               
        );
    }
}

export default SearchBar;