import Panel from './Panel'
import { Link } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import DataContext from '../data/DataContext'
import { getMenus } from '../data/DataActions'
import menus from '../data/menus.json'

function Left() {
    const { dispatch, currPage, blogPosts } = useContext(DataContext)

    function makeMenu() {
        console.log(currPage)
        let navMenu = menus.sort((a, b) => a.order - b.order)
        return (
            <ul>
                {navMenu.map((item) => {
                    return (
                        <li
                            className={`menuItem ${
                                currPage === item.name.toLowerCase() ? 'active' : ''
                            }`}
                            key={item.order}
                        >
                            <Link to={item.url}>{item.name}</Link>
                        </li>
                    )
                })}
            </ul>
        )
    }

    return (
        <aside>
            <nav>
                <Panel
                    title={'Navigation'}
                    classes={'nav largeTitle'}
                    content={makeMenu()}
                />
            </nav>
            <Panel
                title={'Longer Title Test Test Test Test'}
                content={<p>Hello World</p>}
            />
        </aside>
    )
}

export default Left
