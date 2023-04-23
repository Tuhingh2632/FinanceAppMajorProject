import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Toolbar, useMediaQuery } from '@mui/material';

// project import
import Drawer from './Drawer';
import Header from './Header';
import navigation from 'menu-items';
import Breadcrumbs from 'components/@extended/Breadcrumbs';
import NewLoginDialog from 'pages/authentication/NewLoginDialog';
import RegisterDialog from 'pages/authentication/NewRegisterDialog';
import Layout from 'pages/viewPages/Layout';
import Crypto from 'pages/viewPages/Crypto';
import Gold from 'pages/viewPages/Gold';
import Mutualfund from 'pages/viewPages/MutualFund';
import FixedDeposite from 'pages/viewPages/FixedDeposite';
import GovernmentSchemes from 'pages/viewPages/GovernmentSchemes';

// types
import { openDrawer } from 'store/reducers/menu';

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
    const theme = useTheme();
    const matchDownLG = useMediaQuery(theme.breakpoints.down('xl'));
    const dispatch = useDispatch();

    const { drawerOpen } = useSelector((state) => state.menu);
    // const menu = useSelector((state) => state.menu);
    // console.log(menu);

    // drawer toggler
    const [open, setOpen] = useState(drawerOpen);
    const handleDrawerToggle = () => {
        setOpen(!open);
        dispatch(openDrawer({ drawerOpen: !open }));
    };
    // const handleDialogOpen=()=>{
    //     setDialog(!dialog);
    //     dispatch(openDialogReducer({openDialogBox:!dialog}));
    // }

    // set media wise responsive drawer
    useEffect(() => {
        setOpen(!matchDownLG);
        dispatch(openDrawer({ drawerOpen: !matchDownLG }));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [matchDownLG]);

    useEffect(() => {
        if (open !== drawerOpen) setOpen(drawerOpen);
        // if (dialog !==openDialogBox) setDialog(openDialogBox);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [drawerOpen]);

    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Header open={open} handleDrawerToggle={handleDrawerToggle} />
            <Drawer open={open} handleDrawerToggle={handleDrawerToggle} />
            <Box component="main" sx={{ width: '100%', flexGrow: 1, p: { xs: 2, sm: 3 } }}>
                {/* <Toolbar /> */}
                {/* <Breadcrumbs navigation={navigation} title titleBottom card={false} divider={false} /> */}

                <Layout />
                <Crypto />
                <Gold />
                <Mutualfund />
                <FixedDeposite />
                <GovernmentSchemes />
                <Outlet />
            </Box>
        </Box>
    );
};

export default MainLayout;
