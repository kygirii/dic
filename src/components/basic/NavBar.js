import React, { Component, Fragment } from 'react';
import { Grid, AppBar, Toolbar, IconButton, Button, List, ListItem, ListItemIcon, ListItemText, Drawer, withStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';
import AddBoxIcon from '@material-ui/icons/AddBox';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = theme => ({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

class NavBar extends Component {
    constructor(props){
        super(props);
        this.state= { 
           left : false,
        }
    };

    toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return ;
        }
        this.setState({...this.state, [anchor] : open});
    }

    iconSwitch = (text) => {
        switch(text) {
            case 'Open' : 
                return <OpenInBrowserIcon />
            case 'New' : 
                return <AddBoxIcon />
            case 'Edit' : 
                return <EditIcon />
            case 'Save' : 
                return <SaveIcon />
            case 'Test' : 
                return <DeveloperModeIcon />
            case 'Exit' : 
                return <ExitToAppIcon />
        }
    }
        
    

    list = (anchor) => (

        <div
        className={clsx(useStyles.list)}
        role="presentation"
        onClick={this.toggleDrawer(anchor, false)}
        onKeyDown={this.toggleDrawer(anchor, false)}
        >
            <List>
                {['Open', 'New', 'Edit', 'Save', 'Test', 'Exit'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{this.iconSwitch(text)}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>

        </div>
    );



    render () {
        const anchor = 'left';
        return (
            <div>
                <Fragment>
                    <AppBar position="static" style={{ background : '#000000' }}>
                        <Toolbar>
                            <IconButton 
                                edge="start" 
                                color="inherit" 
                                aria-label="menu"
                                onClick={this.toggleDrawer(anchor, true)}
                                >
                                <MenuIcon />
                            </IconButton>
                            <Drawer anchor={anchor} open={this.state[anchor]} onClose={this.toggleDrawer(anchor, false)}>
                                {this.list(anchor)}
                            </Drawer>
                            <Grid container>
                                {['Open', 'New', 'Edit', 'Save', 'Test'].map((text, index) => (
                                    <Button color="inherit">
                                        {text}
                                    </Button>
                                ))}
                            </Grid>

                            <Grid justify="flex-end">
                                <Grid container justify="space-around">
                                    <Button color="inherit">
                                        <ExitToAppIcon />
                                        Exit
                                    </Button>
                                </Grid>

                            </Grid>


                        </Toolbar>
                    </AppBar>
                </Fragment>
                
            </div>
        );
    }
}

export default withStyles(useStyles, { withTheme: true })(NavBar);