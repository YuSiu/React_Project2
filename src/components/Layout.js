import React from "react";
import {
    Drawer as MUIDrawer,
    ListItem,
    List,
    ListItemIcon,
    ListItemText,
    
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink, Router } from 'react-router-dom';

const useStyles = makeStyles({
  drawer: {
    width: '160px'
  }
});

const Drawer = props => {
    const { history } = props;
    const classes = useStyles();
    const itemList = [
        {
            text: 'Coronavirus',
            onClick: () => history.push('/category/1'),
        },
        {
            text: 'Climate',
        },
        { 
            text: 'World',
        },
        { 
            text: 'Asia',
        },
        {
            text: 'UK',
        },
        {
            text: 'Tech'
        }];
    return (
        <MUIDrawer open>
            <List>
                {itemList.map((item, index) => {
                    const { text , onClick} = item;
                    return (
                        <ListItem button key={text} onClick={onClick}>
                            <ListItemIcon>
                            {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    );
                })}
            </List>
        </MUIDrawer>
    );
};

export default Drawer;