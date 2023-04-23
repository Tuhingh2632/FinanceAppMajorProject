import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// render - login
const AuthLogin = Loadable(lazy(() => import('pages/authentication/Login')));
const AuthRegister = Loadable(lazy(() => import('pages/authentication/Register')));
//const NewAuthLogin=Loadable(lazy(()=>import('pages/authentication/NewLoginDialog')))
const SipCalculator=Loadable(lazy(() => import('pages/calculators/SipCalculator')));
const FdCalculator=Loadable(lazy(() => import('pages/calculators/FdCacculator')));
const BondItem=Loadable(lazy(() => import('pages/menuPages/bonds')));
const FdItem=Loadable(lazy(() => import('pages/menuPages/fd')));
const GovtSchemesItem=Loadable(lazy(() => import('pages/menuPages/govtschemes')));
const RealEstateItem=Loadable(lazy(() => import('pages/menuPages/realestate')));

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: 'login',
            element: <AuthLogin />
        },
        {
            path: 'register',
            element: <AuthRegister />
        },
        {
            path: 'sipCalculator',
            element: <SipCalculator />
        },
        {
            path: 'fdCalculator',
            element: <FdCalculator />
        },
        {
            path: 'bonds',
            element: <BondItem />
        },
        {
            path: 'fixedDeposit',
            element: <FdItem />
        },
        {
            path: 'governmentSchemes',
            element: <GovtSchemesItem />
        },
        {
            path: 'realEstate',
            element: <RealEstateItem />
        }
    ]
};

export default LoginRoutes;
