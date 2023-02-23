import React from 'react'
import { Typography, MenuItem, Card, CardContent, Box, Button, Stack, TextField } from '@mui/material';

const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];

export default function Filter() {
    return (
        <div>
            <Card sx={{ p: 2 }}>
                <Typography variant="h6" component="div">
                    Find Movies By
                </Typography>
                <CardContent>
                    <Box
                        width="250px"
                        display="flex"
                        flexDirection="column"
                        component="form"
                        autoComplete="off"
                    >
                        <TextField
                            required
                            label="Movie Name"
                            variant='standard'
                        />
                        <TextField
                            id="outlined-select-currency"
                            select
                            variant='standard'
                            label="Genre"
                        >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            id="outlined-select-currency"
                            select
                            variant='standard'
                            label="Artists"
                        >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            required
                            label="Release Date Start"
                            variant='standard'
                        />
                        <TextField
                            variant='standard'
                            label="Release Date End"
                            required
                        />
                        <Stack p={3}>
                            <Button
                                color='primary'
                                variant='contained'
                            >
                                Filter
                            </Button>
                        </Stack>
                    </Box>
                </CardContent>
            </Card>
        </div>
    )
}
