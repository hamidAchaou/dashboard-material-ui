import PropTypes from 'prop-types'; // Import PropTypes
import { styled, useTheme } from '@mui/material/styles';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MuiDrawer from '@mui/material/Drawer';
import { BarChartOutlined, CalendarTodayOutlined, ContactsOutlined, HelpOutlineOutlined, HomeOutlined, MapOutlined, PeopleOutline, PersonOutline, ReceiptOutlined, TimelineOutlined } from '@mui/icons-material';
import { Avatar, Box, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { grey } from '@mui/material/colors';

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const SideBar = ({ open, handleDrawerClose }) => {
    const theme = useTheme();
    const location = useLocation();
    const navigate = useNavigate();
    const [selectedPath, setSelectedPath] = useState(location.pathname);

    const handleItemClick = (path) => {
        setSelectedPath(path);
        navigate(path);
    };

    const menuItems = [
        {
            category: 'Array1',
            items: [
                { text: "Dashboard", icon: <HomeOutlined />, path: "/" },
                { text: "Manage Team", icon: <PeopleOutline />, path: "/team" },
                { text: "Contacts Information", icon: <ContactsOutlined />, path: "/contacts" },
                { text: "Invoices Balances", icon: <ReceiptOutlined />, path: "/Invoices" },
            ]
        },
        {
            category: 'Array2',
            items: [
                { text: "Profile Form", icon: <PersonOutline />, path: "/form" },
                { text: "Calendar", icon: <CalendarTodayOutlined />, path: "/calendar" },
                { text: "FAQ Page", icon: <HelpOutlineOutlined />, path: "/faq" },
            ]
        },
        {
            category: 'Array3',
            items: [
                { text: "Bar chart", icon: <BarChartOutlined />, path: "/bar" },
                { text: "Pie Chart", icon: <CalendarTodayOutlined />, path: "/pie" },
                { text: "Line chart", icon: <TimelineOutlined />, path: "/line" },
                { text: "Geography Chart", icon: <MapOutlined />, path: "/geography" },
            ]
        }
    ];

    return (
        <Drawer variant="permanent" open={open}>
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider />

            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                my={1}
            >
                <Avatar alt="Travis Howard" sx={{ mx: "auto", width: open ? 88 : 44, height: open ? 88 : 44, transition: "0.25s", mb: 1, border: "2px solid gray" }} src="https://images.pexels.com/photos/1666779/pexels-photo-1666779.jpeg?auto=compress&cs=tinysrgb&w=600" />
                <Typography sx={{ fontSize: open ? 17 : 0, transition: "0.25s" }}>Achaou</Typography>
                <Typography sx={{ fontSize: open ? 15 : 0, transition: "0.25s", color: theme.palette.info.main }}>Web Developer</Typography>
            </Box>

            <Divider />
            {menuItems.map((menu) => (
                <List key={menu.category}>
                    {menu.items.map((item) => (
                        <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
                            <ListItemButton
                                onClick={() => handleItemClick(item.path)}
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                    bgcolor: selectedPath === item.path ? (theme.palette.mode === "dark" ? grey[800] : grey[300]) : null
                                }}>
                                <ListItemIcon
                                    sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }}>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            ))}
        </Drawer>
    )
}

SideBar.propTypes = {
    open: PropTypes.bool.isRequired,
    handleDrawerClose: PropTypes.func.isRequired,
};

export default SideBar;
