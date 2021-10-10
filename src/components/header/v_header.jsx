import React, { Component } from 'react';
import {Link} from 'react-router-dom'


import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import HeaderImg from '../../images/header.jpg'
import Logo from '../../images/truecaller.svg'

export default class Header extends Component {
    render() {
        const { logo, banner, caption } = this.props
        return(
            <header>
                <Grid container>
                    <Grid item xs={12} sm={12} md={12}>
                        <Grid container item xs={4} sm={4} md={2}> 
                            <Box p={2} component={Link} to='/'>
                                <img src={logo} alt="logo" width="100%"/>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} className="banner">
                        <img src={banner} alt="header" width="100%"/>
                        {caption && <Box className="centered" variant="h2" component='div'>The TrueCaller Blog</Box>}
                    </Grid>
                </Grid>
            </header>
        )
    }
}

Header.defaultProps = {
    logo: Logo,
    banner: HeaderImg,
    caption: true
}
