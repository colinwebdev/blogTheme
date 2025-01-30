import { useEffect, useState, useContext } from 'react'
import DataContext from '../data/DataContext'
import { Link } from 'react-router-dom'

function Main() {
    const { dispatch, currPage } = useContext(DataContext)
    useEffect(() => {
        dispatch({ type: 'SET_PAGE', payload: 'home' })
    }, [])
    return <div>This is body content</div>
}

export default Main
