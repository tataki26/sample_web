import { Box, FormControl, Grid, InputLabel, MenuItem, Select, Button } from '@mui/material';
import React from 'react';

const Ethernet = () => {
    const [Network, setNetwork] = React.useState('');
    const handleChange = (event) => {
      setNetwork(event.target.value);
    };
    return (

        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} textAlign="end">
            <Box p={2} place="end">
              Status:
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} textDecorationColor="red" fontSize={20} color="gray">
            <Box p={1}>
              Disconnected
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} textAlign="end">
            <Box p={2}>
              Nework ID:
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
        <Box flex={1} p={0} sx={{ display: { xs: "none", sm: "block" } }}>
          <FormControl sx={{ m: 0.5, minWidth: 200 }} size="small" textAlign="center">
          <InputLabel id="demo-select-small"></InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={Network}
            onChange={handleChange}
          >
            <MenuItem value="">
            </MenuItem>
            <MenuItem value={1}>0</MenuItem>
            <MenuItem value={2}>1</MenuItem>
            <MenuItem value={3}>2</MenuItem>
            <MenuItem value={4}>3</MenuItem>
            <MenuItem value={5}>4</MenuItem>
            <MenuItem value={6}>5</MenuItem>
            <MenuItem value={7}>6</MenuItem>
            <MenuItem value={8}>7</MenuItem>
            <MenuItem value={9}>8</MenuItem>
            <MenuItem value={10}>9</MenuItem>
            <MenuItem value={11}>10</MenuItem>
            <MenuItem value={12}>11</MenuItem>
            <MenuItem value={13}>12</MenuItem>
            <MenuItem value={14}>13</MenuItem>
            <MenuItem value={15}>14</MenuItem>
            <MenuItem value={16}>15</MenuItem>
            <MenuItem value={17}>16</MenuItem>
          </Select>
        </FormControl>
        </Box>
        </Grid>
        <Grid item xs={12} sm={6} textAlign="end">
            <Box p={2}>
              Configure IPv4:
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
        <Box flex={1} p={0} sx={{ display: { xs: "none", sm: "block" } }}>
            <FormControl sx={{ m: 0.5, minWidth: 200 }} size="small" textAlign="center">
          <InputLabel id="demo-select-small"></InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={Network}
            onChange={handleChange}
          >
            <MenuItem value={10}>
            </MenuItem>
            <MenuItem value={10}>Using DHCP</MenuItem>
            <MenuItem value={20}>Manually</MenuItem>
          </Select>
          </FormControl>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} textAlign="end">
            <Box p={2}>
              IP Address:
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box p={2}>
              192.168.240.1
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} textAlign="end">
            <Box p={2}>
              Subnet Mask:
            </Box>
          </Grid>
               <Grid item xs={12} sm={6}>
            <Box p={2}>
            255.255.255.0
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} textAlign="end">
            <Box p={2}>
              OS Version:
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box p={2}>
              0
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} textAlign="end">
            <Box p={2}>
            API Version:
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box p={2}>
              0
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} textAlign="end">
            <Button variant="contained" p={2}>
              Connect
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button variant="contained" p={2}>
              Disconnect
            </Button>
          </Grid>
        </Grid>
    
      );
};

export default Ethernet;