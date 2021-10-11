import React, { Fragment, useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Pagination from '@mui/material/Pagination';
import Grid from '@mui/material/Grid';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';




const Select2 = ({ data=[], label='', onChange, attr='select' }) => {
    const [value, setValue] = useState('');
    const handleChange = (event, value) => {
        setValue(value);
        onChange && onChange(value?.value)
    };
    return (
        <Fragment>
            <Box>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={data}
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} label={label} />}
                />
            </Box>
        </Fragment>
    )
}

const SkeletonLoader = ({ index = 0, width = 250, height = 150}) => {
    return(
        <Box key={index}>
            <Skeleton variant="rectangular" width={width} height={height} />
            <Skeleton width="60%"/>
            <Skeleton width="60%" />
        </Box>
    )
}

const CustomPagination = ({ totalCount, pageSize, onChange, disable=false }) => {
    const [ currentPage, setCurrentPage ] = useState(1)
    const maxCount = parseInt(totalCount / pageSize)
    const handleChange = (e, page) => {
        onChange && onChange(e, page)
        setCurrentPage(page)
    }
    return (
        <Fragment>
            { !disable && 
                <Pagination 
                count={maxCount} 
                page={currentPage}
                color="primary" 
                onChange={handleChange}
                />
            }
        </Fragment>
    )
}

const NoDataText = ({ msg = 'No Available Data'}) => {
    return (
        <Fragment>
            <Grid item xs={12} sm={12} md={12} textAlign='center'>
                <Box component='div' m={2} p={2}>
                    <strong>{msg}</strong>
                </Box>
            </Grid>
        </Fragment>
    )
}

export { 
    Select2, SkeletonLoader, CustomPagination, NoDataText
}
