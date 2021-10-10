import React, { Component }from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default class Footer extends Component {
    render() {
        return(
            <footer>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={12}>
                            <Box p='20px' className='footer'>
                                <Container>
                                    <Box>&copy; True Software Scandinavia AB</Box>    
                                </Container>
                            </Box>
                        </Grid>
                    </Grid>
            </footer>
        )
    }
}