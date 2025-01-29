import axios from 'axios'

const baseURL = 'https://blog.undeadorion.com/wp-json/wp/v2/'
const config = {
    auth: {
        username: process.env.REACT_APP_USER,
        password: process.env.REACT_APP_WP_PASS,
    },
}

export async function getMenus() {
    try {
        let menus = await axios.get(`${baseURL}`)
        console.log(menus.data)
        // return menus
    } catch(error) {
        console.log(error)
    }
}