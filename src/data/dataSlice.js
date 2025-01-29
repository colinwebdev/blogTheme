import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { data } from 'react-router-dom'

const baseURL = 'https://blog.undeadorion.com/wp-json/wp/v2/'
const appPass = process.env.REACT_APP_WP_PASS
const user = process.env.REACT_APP_USER
const config = {
    auth: {
        username: user,
        password: appPass,
    },
}

let initialState = {
    currPageType: 'notHome',
    blogPosts: {
        posts: [],
        pageTitle: 'Blog',
    },
    blogPost: {},
    page: {},
    sentMessage: {},
    menus: null
}

function processError(error) {
    let message =
        (error.response &&
            error.response.data &&
            error.response.data.message) ||
        error.message ||
        error.toString()

    return message
}

async function populatePost(post) {
    let featImg = null
    let categories = []
    let tags = []
    if (post.featured_media !== 0)
        try {
            featImg = await axios.get(
                `${baseURL}media/${post.featured_media}?v=${Date.now()}`
            )
        } catch (error) {
            console.log(error.request.responseURL)
            console.log(error)
        }

    for (let i in post.categories) {
        await axios
            .get(`${baseURL}categories/${post.categories[i]}`)
            .then((res) => {
                categories.push(res.data)
            })
    }
    for (let i in post.tags) {
        await axios
            .get(`${baseURL}tags/${post.tags[i]}?v=${Date.now()}`)
            .then((res) => {
                tags.push(res.data)
            })
    }
    return {
        ...post,
        featImg: featImg ? featImg.data : featImg,
        categories,
        tags,
    }
}

export const setPage = createAsyncThunk(
    'global/setPage',
    async (page, thunkAPI) => {
        return page
    }
)

export const getBlogPost = createAsyncThunk(
    'global/getPost',
    async (slug, thunkAPI) => {
        try {
            let post = await axios.get(
                `${baseURL}posts?slug=${slug}&v=${Date.now()}`
            )
            let fullPost = await populatePost(post.data[0])
            return fullPost
        } catch (error) {
            console.log(error)
            return thunkAPI.rejectWithValue(processError(error))
        }
    }
)

export const getMenus = createAsyncThunk(
    'global/getMenus',
    async (_, thunkAPI) => {
        try {
            let menus = await axios.get(`${baseURL}menus`)
            return menus
            // let fullPost = await populatePost(post.data[0])
            // return fullPost
            console.log(menus)
        } catch (error) {
            console.log(`${baseURL}menus`)
            console.log(error)
            return thunkAPI.rejectWithValue(processError(error))
        }
    }
)

export const getBlogPosts = createAsyncThunk(
    'global/getPosts',
    async (_, thunkAPI) => {
        try {
            let response = await axios.get(`${baseURL}posts?v=${Date.now()}`)
            let posts = []
            for (let i in response.data) {
                let post = await populatePost(response.data[i])
                posts.push(post)
            }

            return {
                posts,
                pageTitle: 'Blog',
            }
        } catch (error) {
            console.log(error)
            console.log(error.request.responseURL)
            return thunkAPI.rejectWithValue(processError(error))
        }
    }
)

export const getFilteredPosts = createAsyncThunk(
    'global/getFiltered',
    async ({ getType, slug }, thunkAPI) => {
        try {
            let itemURL = baseURL
            let dataURL = baseURL + 'posts?'
            let title = ''
            switch (getType) {
                case 'category':
                    itemURL += `categories?slug=${slug}&v=${Date.now()}`
                    title = 'Posts from category '
                    dataURL += `categories=`
                    break
                case 'tag':
                    itemURL += `tags?slug=${slug}&v=${Date.now()}`
                    title = 'Posts tagged '
                    dataURL += `tags=`
                    break
                default:
                    break
            }

            let item = await axios.get(itemURL)
            let itemId = item.data[0].id
            title += item.data[0].name
            let response = await axios.get(dataURL + itemId)
            let posts = []
            for (let i in response.data) {
                posts.push(await populatePost(response.data[i]))
            }
            return {
                posts,
                pageTitle: title,
            }
        } catch (error) {
            console.log(error.request.responseURL)
            console.log(error)
            return thunkAPI.rejectWithValue(processError(error))
        }
    }
)

export const getImage = createAsyncThunk(
    'global/getImage',
    async (id, thunkAPI) => {
        try {
        } catch (error) {
            console.log(error)
            return thunkAPI.rejectWithValue(processError(error))
        }
    }
)

export const getPage = createAsyncThunk(
    'global/getPage',
    async (slug, thunkAPI) => {
        try {
            let page = await axios.get(
                `${baseURL}pages?slug=${slug}&v=${Date.now()}`
            )
            let fullPage = await populatePost(page.data[0])
            return fullPage
        } catch (error) {
            console.log(error)
            return thunkAPI.rejectWithValue(processError(error))
        }
    }
)

export const postMessage = createAsyncThunk(
    'global/postMessage',
    async (data, thunkAPI) => {
        try {
            let res = await axios.post(`${baseURL}message`, data, config)
            if (res.status === 201) {
                return {
                    status: 'success',
                    data: res.data,
                }
            } else {
                return {
                    status: 'failed',
                }
            }
        } catch (error) {
            console.log(user)

            console.log(error.request.responseURL)
            return thunkAPI.rejectWithValue(processError(error))
        }
    }
)

export const dataSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(setPage.fulfilled, (state, action) => {
                state.currPageType = action.payload
            })
            .addCase(getBlogPosts.fulfilled, (state, action) => {
                state.blogPosts = action.payload
            })
            .addCase(getBlogPost.fulfilled, (state, action) => {
                state.blogPost = action.payload
            })
            .addCase(getFilteredPosts.fulfilled, (state, action) => {
                state.blogPosts = action.payload
            })
            .addCase(getPage.fulfilled, (state, action) => {
                state.page = action.payload
            })
            .addCase(postMessage.fulfilled, (state, action) => {
                state.sentMessage = action.payload
            })
            .addCase(getMenus.fulfilled, (state, action) => {
                state.menus = action.payload
            })
    },
})

export let { reset } = dataSlice.actions
export default dataSlice.reducer
