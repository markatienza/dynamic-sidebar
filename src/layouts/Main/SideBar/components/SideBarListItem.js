import React, { useState, forwardRef } from 'react';
import { NavLink } from 'react-router-dom';

import { makeStyles, createStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles((theme) =>
  createStyles({
    menuItem: {
      color: '#ffffff',
      '&.active': {
        background: 'rgba(0, 0, 0, 0.08)',
        color: '#97c05c',
        '& .MuiListItemIcon-root': {
          color: '#fff',
        },
      },
    },
    menuItemIcon: {
      color: '#97c05c',
    },
    listDivider: {
      backgroundColor: '#97c05c1a',
    },
    subMenuItem: {
      padding: theme.spacing(0, 0, 0, 3),
    },
  })
);

const CustomRouterLink = forwardRef((props, ref) => {
  return (
    <div ref={ref} style={{ flexGrow: 1 }}>
      <NavLink exact {...props} innerRef={ref} />
    </div>
  );
});

const ListItemComponent = (props) => {
  const { className, onClick, href, children } = props;
  if (!href || typeof href !== 'string') {
    return (
      <ListItem
        children={children}
        button
        className={className}
        onClick={onClick}
      />
    );
  }
  return (
    <ListItem
      children={children}
      button
      className={className}
      onClick={onClick}
      component={CustomRouterLink}
      to={href}
    />
  );
};

const SideBarListItem = (props) => {
  const { title, href, icon, childrens = [] } = props;
  const isExpandable = childrens && childrens.length > 0;
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleClick = () => {
    setOpen(!open);
  };

  const SideBarItemRoot = (
    <ListItemComponent
      button
      className={classes.menuItem}
      href={href}
      onClick={handleClick}
    >
      {/* Display an icon if any */}
      {icon && (
        <ListItemIcon className={classes.menuItemIcon}>{icon}</ListItemIcon>
      )}
      <ListItemText primary={title} inset={!icon} />
      {/* Display the expand menu if the item has children */}
      {isExpandable && open && <ExpandMoreIcon />}
      {isExpandable && !open && <NavigateNextIcon />}
    </ListItemComponent>
  );

  const SideBarItemChildren = isExpandable ? (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <Divider className={classes.listDivider} />
      <List component="div" className={classes.subMenuItem} disablePadding>
        {childrens.map((child, index) => (
          <SideBarListItem {...child} key={index} />
        ))}
      </List>
    </Collapse>
  ) : null;

  return (
    <div>
      {SideBarItemRoot}
      {SideBarItemChildren}
    </div>
  );
};

export default SideBarListItem;
