import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';

import SideBar from './SideBar';
import TopBar from './TopBar';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  sideBar: {
    width: drawerWidth,
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const Main = (props) => {
  const { children } = props;
  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const [openSideBar, setOpenSideBar] = useState(false);
  const [shouldSidebarOpen, setShouldSidebarOpen] = useState(
    isDesktop ? true : openSideBar
  );

  useEffect(() => {
    setShouldSidebarOpen(isDesktop ? true : openSideBar);
  }, [isDesktop]);  

  const handleOpenSideBar = () => {
    setOpenSideBar(true);
    setShouldSidebarOpen(true);
  };
  const handleCloseSideBar = () => {
    setOpenSideBar(false);
    setShouldSidebarOpen(false);
  };
  const variant = isDesktop ? 'persistent' : 'persistent';
  return (
    <div className={classes.root}>
      <CssBaseline />
      <TopBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: shouldSidebarOpen,
        })}
        isOpen={shouldSidebarOpen}
        onClose={handleCloseSideBar}
        onOpen={handleOpenSideBar}
      />
      <SideBar
        className={classes.sideBar}
        onClose={handleCloseSideBar}
        open={shouldSidebarOpen}
        variant={variant}
      />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: shouldSidebarOpen,
        })}
      >
        <div className={classes.drawerHeader} />
        {children}
      </main>
    </div>
  );
};

export default Main;
