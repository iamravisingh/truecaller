import React, { Component, Fragment} from 'react';
import {Link} from 'react-router-dom'
import { withRouter } from "react-router";

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';


import { BLOG_FILTER, COLOR_PALLETE } from '../../utils/global'
import { calculateTimeSince } from '../../utils';
import { Select2, CustomPagination, SkeletonLoader, NoDataText } from '../generic_components'


class VPost extends Component {
    render() {
        const { data, state, callbacks, params } = this.props;
        const { handleFilter, handlePageChange } = callbacks;
        const { postCollection, isLoading, activeCategories } = state;
        return(
            <Fragment>
                <Container>
                    <Grid container>
                        <Grid item xs={12} sm={3} md={3}>
                            <Box>
                                <h1>Latest articles</h1>
                                <Select2 
                                data={activeCategories} 
                                attr={"category"}
                                label = {"All categories"} 
                                onChange={handleFilter}
                                />
                            </Box>
                            <br/><br/>
                        </Grid>
                    </Grid>
                        { isLoading ?
                         <Grid container spacing={1}>
                                {Array.from(new Array(4)).map((item,idx) => {
                                    return (
                                        <Grid item xs={12} sm={3} md={3} lg={3}>
                                            <SkeletonLoader index={idx}/>
                                        </Grid>
                                    )})
                                }
                          </Grid>
                          : 
                          <Box>
                            <CardList data={data} callbacks={callbacks} postCollection={postCollection}/>
                          </Box>
                        }
                        <Grid container>
                            <Grid container item xs={12} sm={12} md={12} justifyContent='center'>
                                <Box pt={4}>
                                    <CustomPagination 
                                    totalCount={postCollection?.found}
                                    pageSize={params.number}
                                    onChange={handlePageChange}
                                    disable={!data.length}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    <br/><br/><br/>
                </Container>
            </Fragment>
        )
    }
}

function CardList({ data, postCollection }){
    return(
        <Fragment>
            <Grid container spacing={4}>
            { 
                data.length && data[0]?.post_thumbnail ?
                 data.map((item, idx) => {
                    if(!item?.post_thumbnail) return null
                    const activeCategories = Object.keys(item.categories)
                    return (
                            <Grid item key={idx} xs={12} sm={3} md={3}>
                                <Card sx={{'height': '100%'}} >
                                    <Container>
                                        <CardHeader
                                            title={
                                                <Fragment>
                                                    <Stack direction="row" spacing={2}>
                                                        <Box component='span' className="dot" sx={{ backgroundColor: COLOR_PALLETE[idx]}}></Box>
                                                        <Box component='span'>{activeCategories[0]}</Box>
                                                    </Stack>
                                                </Fragment>
                                            }
                                            // subheader="September 14, 2016"
                                            disableTypography
                                        />
                                    </Container>
                                    <Link to={`/post/${item?.slug}`}>
                                        <CardMedia
                                            component="img"
                                            sx={{ maxHeight: 150}}
                                            height={item.post_thumbnail.height}
                                            width={item.post_thumbnail.width}
                                            image={item.post_thumbnail.URL}
                                            alt="img"
                                        />
                                    </Link>
                                    <CardContent>
                                        <Container>
                                            <Tooltip title={item.title} placement="top" arrow>
                                                <Typography disableTypography noWrap gutterBottom variant="h5" component="div">
                                                        {item.title}
                                                </Typography>
                                            </Tooltip>
                                            <Typography variant="body2" color="text.secondary">
                                                {calculateTimeSince(new Date(postCollection[BLOG_FILTER.POST.name][idx].date))}
                                            </Typography>
                                        </Container>
                                    </CardContent>
                                </Card>
                             </Grid>
                    )
                })
                :
                <NoDataText/>
            }
            </Grid>
        </Fragment>
    )
}

export default withRouter(VPost);