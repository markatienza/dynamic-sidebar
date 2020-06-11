import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const pages = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: <DashboardIcon />,
  },
  {
    title: 'Financers',
    href: '/financers',
    icon: <PeopleIcon />,
  },
  {
    title: 'Users',
    icon: <ShoppingBasketIcon />,
    childrens: [
      {
        title: 'Add',
        icon: <ShoppingBasketIcon />,
        childrens: [
          {
            title: 'Added',
            icon: <ShoppingBasketIcon />,
            href: '/added',
          },
        ],
      },
    ],
  },
];
export default pages;
