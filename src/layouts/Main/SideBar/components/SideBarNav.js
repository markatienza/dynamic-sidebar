import React from 'react';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/styles';

import SideBarListItem from './SideBarListItem';

const useStyles = makeStyles((theme) => ({
  appMenu: {
    width: '100%',
  },
}));

const SideBarNav = (props) => {
  const classes = useStyles();
  const { pages } = props;

  return (
    <List component="nav" className={classes.appMenu}>
      {pages.map((item) => (
        <SideBarListItem {...item} key={item.title} />
      ))}
    </List>
  );
};

export default SideBarNav;
