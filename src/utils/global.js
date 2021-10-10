const BASE_URL = 'https://public-api.wordpress.com/rest/v1.1/sites/107403796';

const DEFAULT_PAGE_SIZE = 20;
const DEFAULT_PAGE = 1;
const DEFAULT_POST_FIELDS = ['slug,categories,post_thumbnail,title,date']
const DEFAULT_POST_DETAILS_FIELDS = ['featured_image','title','author','content','date']

const BLOG_FILTER = {
    POST: {name: "posts", value: 'posts'},
    CATEGORY: {name: "categories", value:'categories'}
}

const GET_DYNAMIC_URL = {
    'posts' : (fields) => `${BASE_URL}/posts`,
    'categories': () => `${BASE_URL}/categories`
}

const COLOR_PALLETE = ['#4f65b5', '#FFA000', '#C2185B', '#E040FB', '#E91E63', '#512DA8', '#E040FB5', '#673AB7',
                    '#536DFE', '#536DFE', '#03A9F4', '#03A9F4', '#4CAF50', '#4CAF50', '#CDDC39', '#FBC02D',
                    '#9E9E9E', '#FF5722', '#FF5722', '#455A64' ]

export {
    BASE_URL,
    DEFAULT_PAGE_SIZE,
    DEFAULT_PAGE,
    GET_DYNAMIC_URL,
    BLOG_FILTER,
    DEFAULT_POST_FIELDS,
    DEFAULT_POST_DETAILS_FIELDS,
    COLOR_PALLETE
}