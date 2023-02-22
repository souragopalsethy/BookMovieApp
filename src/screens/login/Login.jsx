import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Stack, TextField } from '@mui/material';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 2 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} variant="fullWidth">
                    <Tab label="LOGIN" {...a11yProps(0)} />
                    <Tab label="REGISTER" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Box
                    width="350px"
                    display="flex"
                    flexDirection="column"
                    component="form"
                    autoComplete="off"
                >
                    <TextField
                        required
                        label="Username"
                        variant='standard'
                    />
                    <TextField

                        variant='standard'
                        label="Password"
                        type="password"
                        required
                    />
                    <Stack p={3}>
                        <Button
                            color='primary'
                            variant='contained'
                        >
                            Login
                        </Button>
                    </Stack>
                </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Box
                    width="350px"
                    display="flex"
                    flexDirection="column"
                    component="form"
                    autoComplete="off"
                >
                    <TextField
                        required
                        label="First Name"
                        variant='standard'
                    />
                    <TextField
                        required
                        label="Last Name"
                        variant='standard'
                    />
                    <TextField
                        required
                        label="Email"
                        variant='standard'
                        type='email'
                    />
                    <TextField
                        variant='standard'
                        label="Password"
                        type="password"
                        required
                    />
                    <TextField
                        variant='standard'
                        label="Contact Number"
                        type="number"
                        required
                    />
                    <Stack p={3}>
                        <Button
                            color='primary'
                            variant='contained'
                        >
                            Register
                        </Button>
                    </Stack>
                </Box>
            </TabPanel>
        </Box>
    );
}
