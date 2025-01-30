import { useEffect, useState, useContext } from 'react'
import DataContext from '../data/DataContext'

function Portfolio() {
    const { dispatch, currPage } = useContext(DataContext)
    useEffect(() => {
        dispatch({ type: 'SET_PAGE', payload: 'portfolio' })
    }, [])
    return <div>This is the page for art</div>
}

export default Portfolio
