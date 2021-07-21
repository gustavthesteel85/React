import React from 'react';
// import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import styles from './Header.module.scss'

const Header = () => {
    return (
        <div className={styles.root}>
            <AppBar position="static" className={styles.app_bar}>
                <Toolbar className={styles.tool_bar}>
                <Typography variant="h6" className={styles.title}>
                    Redux Toolkit Todo List
                </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;