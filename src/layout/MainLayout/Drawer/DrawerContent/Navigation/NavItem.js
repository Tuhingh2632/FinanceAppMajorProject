import PropTypes from 'prop-types';
import { forwardRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Chip, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';

// project import
import { activeItem, openDialogReducer, openRegisterDialogReducer } from 'store/reducers/menu';
import NewLoginDialog from 'pages/authentication/NewLoginDialog';
import { TurnedIn } from '../../../../../../node_modules/@mui/icons-material/index';

// ==============================|| NAVIGATION - LIST ITEM ||============================== //

const NavItem = ({ item, level }) => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const menu = useSelector((state) => state.menu);
    console.log(menu);
    const { drawerOpen, openItem, openDialogBox } = menu;

    let itemTarget = '_self';
    if (item.target) {
        itemTarget = '_blank';
    }

    // let listItemProps = {
    //     component: forwardRef((props, ref) => (
    //         <a style={{ textDecoration: 'none' }} {...props} href={item.url} target={'_blank'}>
    //             {}
    //         </a>
    //     ))
    // };
    let listItemProps = {
        component: forwardRef((props, ref) => (
            <Link ref={ref} {...props} to={item.url} target={itemTarget} style={{ textDecoration: 'none' }} />
        ))
    };
    if (item?.external) {
        listItemProps = { component: 'a', href: item.url, target: itemTarget,textDecoration:'none' };
    }

    const itemHandler = (id) => {
        dispatch(activeItem({ openItem: [id] }));
    };
    // const itemHandler2=(data,id)=>{
    //     console.log(data);
    //     console.log(id);
    //     if(id==='login1'){
    //         dispatch(openDialogReducer({openDialogBox:true}));
    //      }
    //     if(id==='register1'){
    //         dispatch(openRegisterDialogReducer({openRegisterDialog:true}));
    //     }

    // }

    const Icon = item.icon;
    const itemIcon = item.icon ? <Icon style={{ fontSize: drawerOpen ? '1rem' : '1.25rem' }} /> : false;

    const isSelected = openItem.findIndex((id) => id === item.id) > -1;

    // active menu item on page load
    useEffect(() => {
        const currentIndex = document.location.pathname
            .toString()
            .split('/')
            .findIndex((id) => id === item.id);
        if (currentIndex > -1) {
            dispatch(activeItem({ openItem: [item.id] }));
        }
        // eslint-disable-next-line
    }, []);

    const textColor = '#ffffff';
    const iconSelectedColor = '#ffffff';

    return (
        <div>
            <ListItemButton
                {...listItemProps}
                ref={listItemProps}
                disabled={item.disabled}
                onClick={() => itemHandler(item.id)}
                selected={isSelected}
                sx={{
                    zIndex: 1201,
                    pl: drawerOpen ? `${level * 28}px` : 1.5,
                    py: !drawerOpen && level === 1 ? 1.25 : 1,
                    ...(drawerOpen && {
                        '&:hover': {
                            bgcolor: '#595959'
                        }
                    })
                }}
            >
                {itemIcon && (
                    <ListItemIcon
                        sx={{
                            minWidth: 28,
                            color: isSelected ? iconSelectedColor : textColor,
                            ...(!drawerOpen && {
                                borderRadius: 1.5,
                                width: 36,
                                height: 36,
                                alignItems: 'center',
                                justifyContent: 'center',
                                '&:hover': {
                                    bgcolor: '#595959'
                                }
                            }),
                            ...(!drawerOpen &&
                                isSelected && {
                                    bgcolor: '#bfbfbf',
                                    '&:hover': {
                                        bgcolor: '#bfbfbf'
                                    }
                                })
                        }}
                    >
                        {itemIcon}
                    </ListItemIcon>
                )}
                {(drawerOpen || (!drawerOpen && level !== 1)) && (
                    <ListItemText
                        primary={
                            <Typography variant="h6" sx={{ color: isSelected ? iconSelectedColor : textColor }}>
                                {item.title}
                            </Typography>
                        }
                    />
                )}
            </ListItemButton>
        </div>
    );
};

NavItem.propTypes = {
    item: PropTypes.object,
    level: PropTypes.number
};

export default NavItem;
