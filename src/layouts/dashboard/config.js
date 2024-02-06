import ChartBarIcon from '@heroicons/react/24/solid/ChartBarIcon';
import CogIcon from '@heroicons/react/24/solid/CogIcon';
import LockClosedIcon from '@heroicons/react/24/solid/LockClosedIcon';
import ShoppingBagIcon from '@heroicons/react/24/solid/ShoppingBagIcon';
import UserIcon from '@heroicons/react/24/solid/UserIcon';
import UsersIcon from '@heroicons/react/24/solid/UsersIcon';
import { SvgIcon } from '@mui/material';

const createSvgIcon = (icon) => (
  <SvgIcon>
    {icon}
  </SvgIcon>
);

export const items = [
  {
    title: 'Overview',
    icon: createSvgIcon(<ChartBarIcon />)
  },
  {
    title: 'Customers',
    icon: createSvgIcon(<UsersIcon />)
  },
  {
    title: 'Companies',
    icon: createSvgIcon(<ShoppingBagIcon />)
  },
  {
    title: 'Account',
    icon: createSvgIcon(<UserIcon />)
  },
  {
    title: 'Settings',
    icon: createSvgIcon(<CogIcon />)
  },
  {
    title: 'Login',
    icon: createSvgIcon(<LockClosedIcon />)
  },
];
