import React, { Component, Fragment } from 'react';

import VPost from '../../components/posts/v_post'
import { DEFAULT_PAGE, DEFAULT_POST_FIELDS, GET_DYNAMIC_URL, BLOG_FILTER, DEFAULT_PAGE_SIZE } from '../../utils/global'

class CPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            categories: [],
            showCategories:[],
            isLoading: true,
            postCollection : {},
            activeCategories: []
        }
        this.params = {
            number : DEFAULT_PAGE_SIZE,page: DEFAULT_PAGE,categories:'' 
        }
        this.getUrl = {
            post: GET_DYNAMIC_URL[BLOG_FILTER.POST.name](),
            categories: GET_DYNAMIC_URL[BLOG_FILTER.CATEGORY.name]()
        }
    }
    
    componentDidMount(){
        this.fetchPosts();
        this.fetchCategories()
    }

    fetchPosts(){
        const { number, page, categories } = this.params
        fetch(`${this.getUrl.post}/?fields=${DEFAULT_POST_FIELDS.join(',')}&number=${number}&page=${page}&${categories && categories}`)
        .then(response => response.json())
        .then(data => {
            this.setState({list: data.posts, postCollection: data, isLoading: false})
        }).catch(err => this.setState({ isLoading: false }))
    }

    fetchCategories = () => {
        fetch(`${this.getUrl.categories}`)
        .then(response => response.json())
        .then(data => {
            let { categories = [] } = data;
            categories = categories.length && categories.map(item => ({'label': item.name, 'name': item.name, 'value': item.slug}))
            this.setState({categories: [...this.state.categories, ...data.categories], isLoading: false, activeCategories: [...categories]})
        });
    }

    handleFilter = (slug) => {
        let postUrl = slug && `category=${slug}`;
        this.params.categories = postUrl
        this.setState({ isLoading: true })
        this.fetchPosts(postUrl)
    }

    handlePageChange = (e, page) => {
        this.params.page = page;
        this.setState({ isLoading: true })
        this.fetchPosts()
    }


    render() {
        const { handleFilter, state, params, handlePageChange } = this
        const { list } = this.state
        const callbacks = { handleFilter, handlePageChange }
        return(
            <Fragment>
                <VPost 
                data={list} 
                callbacks={callbacks}
                state={state}
                params={params}
                />
            </Fragment>
        )
    }
}

export default CPost