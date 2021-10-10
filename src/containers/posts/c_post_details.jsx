import React, { Component, Fragment}from 'react';

import VPostDetails from '../../components/posts/v_post_details';
import Header from '../../components/header/v_header'
import Footer from '../../components/footer/v_footer'
import { DEFAULT_POST_DETAILS_FIELDS, GET_DYNAMIC_URL, BLOG_FILTER } from '../../utils/global'

export default class CPostDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detailCollection : ''
        }
        this.getUrl = {
            post: GET_DYNAMIC_URL[BLOG_FILTER.POST.name]()
        }
    }
    
    componentDidMount(){
        this.fetchPostDetails()
    }

    fetchPostDetails(){
        const { match : { params: { slug } }} = this.props;
        fetch(`${this.getUrl.post}/slug:${slug}/?fields=${DEFAULT_POST_DETAILS_FIELDS.join(',')}`)
        .then(response => response.json())
        .then(data => {
            this.setState({ detailCollection : data})
        });
    }
    render() {
        const { detailCollection: { featured_image } } = this.state
        return(
            <Fragment>
                <Header banner={ featured_image } caption={false}/>
                <VPostDetails
                    state = { this.state }
                />
                <Footer/>
            </Fragment>
        )
    }
}