import React from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import { SideBarNav, pages } from './components';

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: 240,
    backgroundColor: '#242424',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'space-between',
  },
  drawerHeaderIcon: {
    color: '#fff',
  },
  drawerHeaderTitle: {
    color: '#97c05c',
  },
  divider: {
    backgroundColor: '#97c05c',
  },
  nav: {
    marginBottom: theme.spacing(2),
  },
}));

const SideBar = (props) => {
  const { open, variant, onClose, className } = props;
  const classes = useStyles();
  const theme = useTheme();
  console.log(open);
  return (
    <Drawer
      className={className}
      variant={variant}
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <Typography
          variant="h5"
          component="h1"
          className={classes.drawerHeaderTitle}
        >
          Dynamic SideBar
        </Typography>
        <IconButton onClick={onClose} className={classes.drawerHeaderIcon}>
          {theme.direction === 'ltr' ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
      <Divider className={classes.divider} />
      <SideBarNav className={classes.nav} pages={pages} />
    </Drawer>
  );
};

export default SideBar;
