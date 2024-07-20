// contracts.js
import { BarChartOutlined, CalendarTodayOutlined, ContactsOutlined, HelpOutlineOutlined, HomeOutlined, MapOutlined, PeopleOutline, PersonOutline, ReceiptOutlined, TimelineOutlined } from '@mui/icons-material';

export const menuItems = [
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
