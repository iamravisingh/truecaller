import React, { Component, Fragment}from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

class VPostDetails extends Component {
    createMarkup = () => {
        const { detailCollection } = this.props.state
        return {__html: detailCollection.content};
    }

    render() {
        const { createMarkup } = this
        const { state } = this.props;
        const { detailCollection: { title, date, author = {}} } = state;
        return(
            <Fragment>
                <Container maxWidth="md">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={10} md={10}>
                            <Box mt={4}>
                                <Typography sx={{fontWeight: '800'}} variant='h5' component='div'>
                                    {title}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={3} md={3}>
                            <Stack direction="row" spacing={2}>
                                <Avatar alt={author.name} src={author.avatar_URL} />
                                <Box component='div'>
                                    <Typography component='strong'>
                                        {author.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {new Date(date).toDateString()}
                                    </Typography>
                                </Box>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <Box className="content"component='div' dangerouslySetInnerHTML={createMarkup()}>
                            </Box>                     
                        </Grid>
                    </Grid>
                </Container>
            </Fragment>
        )
    }
}

export default VPostDetails