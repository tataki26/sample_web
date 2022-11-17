import { Box, Button, Checkbox, Container, TextField, Typography } from '@mui/material';
import React from 'react';

const Login = () => {
    return (
        <div>
        <Container component="main">   
        <Box
            sx={{
                marginTop:8,
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
            }}
        >
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <TextField 
                margin='normal'
                label="ID"
                required
                fullWidth
                name="id"
                autoComplete="id"
                autoFocus
            />
            <TextField 
                margin='normal'
                label="Password"
                type="password"    
                required
                fullWidth
                name="password"
                autoComplete="current-password"
            />
            <Button type="submit" fullWidth variant="contained"
            sx={{mt:3, mb:2}}>
            Submit
            </Button>
        </Box>
    </Container>
        </div>
    );
};

export default Login;