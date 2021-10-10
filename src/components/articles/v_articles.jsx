import React, { Component, Fragment } from 'react';

import Header from '../header/v_header';
import Footer from '../footer/v_footer';
import CPost from '../../containers/posts/c_post'

export default class Articles extends Component {
    render(){
        return (
            <Fragment>
                <Header/>
                    <CPost/>
                <Footer/>
            </Fragment>
        )
    }
}