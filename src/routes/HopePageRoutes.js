import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import HomePage from 'pages/homePages/Home';
//const HomePage =Loadable(lazy(()=>import('pages/homePages/Home')));

const HomePageRoutes = {
    path: 'homePage',
    element: <HomePage />
    
};

export default HomePageRoutes;