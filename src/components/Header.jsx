import { siteName, siteSub, siteDesc } from '../data/global'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <div className='bg'></div>
            <Link to='/'>
                <h1>{siteName.toUpperCase()}</h1>
            </Link>
            <Link to='/'>
                <h2>{siteSub}</h2>
            </Link>
            <Link to='/'>
                <h3>{siteDesc}</h3>
            </Link>
        </header>
    )
}

export default Header
