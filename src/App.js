import Main from './pages/Main'
import Header from './components/Header'
import Left from './components/Left'
import Right from './components/Right'

function App() {
    return (
        <>
            <div className='container'>
                <Header />
                <div className='pageWrap'>
                    <Left />
                    <div className='centerOuter'>
                        <div className='center panel'>
                            <div className='wrap'>
                                <div className='inner'>
                                    <Main />
                                </div>
                            </div>
                        </div>
                    </div>

                    <Right />
                </div>
            </div>
        </>
    )
}

export default App
