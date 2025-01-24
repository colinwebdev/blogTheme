import Main from './pages/Main'
import Header from './components/Header'
import Left from './components/Left'
import Right from './components/Right'

function App() {
    return (
        <>
            <div className='container'>
                <Header />
                <div className='wrap'>
                    <Left />
                    <Main />
                    <Right />
                </div>
            </div>
        </>
    )
}

export default App
