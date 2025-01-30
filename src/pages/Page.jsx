import { useEffect, useState, useContext } from 'react'
import DataContext from '../data/DataContext'

function Page({ page }) {
    const { dispatch, currPage } = useContext(DataContext)
    useEffect(() => {
        dispatch({ type: 'SET_PAGE', payload: page })
    }, [])
    return <div>This is a page</div>
}

export default Page
