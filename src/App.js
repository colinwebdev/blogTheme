import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Main from './pages/Main'
import Header from './components/Header'
import Left from './components/Left'
import Page from './pages/Page'
import { DataProvider } from './data/DataContext'
import Portfolio from './pages/Portfolio'

function App() {
    // const { currPageType } = useSelector((state) => state.global)
    return (
        <DataProvider>
            <Router>
                <div className='container'>
                    <Header />
                    <div className='pageWrap'>
                        <Left />
                        <div className='centerOuter'>
                            <div className='center panel'>
                                <div className='wrap'>
                                    <div className='inner'>
                                        <Routes>
                                            <Route
                                                exact
                                                path='/'
                                                element={<Main />}
                                            />
                                            <Route
                                                path='/art'
                                                element={<Portfolio />}
                                            />
                                            <Route
                                                path='/blog'
                                                element={<Page page='blog' key='blog'/>}
                                            />
                                            <Route
                                                path='/contact'
                                                element={
                                                    <Page page='contact' key='contact'/>
                                                }
                                            />
                                            <Route
                                                path='/about'
                                                element={<Page page='about' key='about' />}
                                            />
                                        </Routes>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        </DataProvider>
    )
}

export default App
