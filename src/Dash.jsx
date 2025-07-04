import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';

import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import PersonIcon from '@mui/icons-material/Person';

import LayersIcon from '@mui/icons-material/Layers';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';

const demoTheme = createTheme({
    cssVariables: { colorSchemeSelector: 'data-toolpad-color-scheme' },
    colorSchemes: { light: true, dark: true },
    breakpoints: { values: { xs: 0, sm: 600, md: 600, lg: 1200, xl: 1536 } },
});

const NAVIGATION = [
    { kind: 'header', title: 'Main items' },
    { segment: 'dashboard', title: 'Dashboard', icon: <DashboardIcon /> },
    { segment: 'user', title: 'User', icon: <PersonIcon /> },
    { segment: 'orders', title: 'Orders', icon: <ShoppingCartIcon /> },
    { kind: 'divider' },
    { kind: 'header', title: 'Analytics' },
    {
        segment: 'reports', title: 'Reports', icon: <BarChartIcon />,
        children: [
            {
                segment: 'sales', title: 'Sales', icon: <DescriptionIcon />,
            },
            {
                segment: 'traffic', title: 'Traffic', icon: <DescriptionIcon />,
            },
        ],
    },
    { segment: 'integrations', title: 'Integrations', icon: <LayersIcon /> },
];

function DemoPageContent({ pathname }) {
    return (
        <Box
            sx={{
                py: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
            }}
        >
            <Typography>Dashboard content for {pathname}</Typography>
        </Box>
    );
}

DemoPageContent.propTypes = {
    pathname: PropTypes.string.isRequired,
};

function Dashboard(props) {

    const router = useDemoRouter('/dashboard');

    return (
        <AppProvider
            navigation={NAVIGATION}
            router={router}
            theme={demoTheme}
            branding={{
                logo: <img src="https://mui.com/static/logo.png" alt="MUI logo" />,
                title: 'Akash Kumar',
            }}>
            <DashboardLayout>
                <DemoPageContent pathname={router.pathname} />
            </DashboardLayout>
        </AppProvider>
    );
}

export default Dashboard;