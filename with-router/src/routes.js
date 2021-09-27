import React from 'react';

const Home = React.lazy(() => import('./containers/Home'))
const Menu = React.lazy(() => import('./containers/Menu'))
const Profile = React.lazy(() => import('./containers/Profile'))

const routes = [
    {path: '/', name:'Home', component: Home, child: ['Home1', 'Home2', 'Home3']},
    {path: '/Menu', name:'Menu',component:Menu, child: ['Menu1', 'Menu2', 'Menu3']},
    {path: '/Profile', name:'Profile', component: Profile, child: ['Profile1', 'Profile2', 'Profile3']},
];

export default routes;