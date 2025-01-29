import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Main from './pages/Main'
import Header from './components/Header'
import Left from './components/Left'
import Right from './components/Right'
import { DataProvider } from './data/DataContext'

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
                                        </Routes>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Right />
                    </div>
                </div>
            </Router>
        </DataProvider>
    )
}

export default App
