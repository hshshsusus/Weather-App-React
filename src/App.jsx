import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import { Provider } from 'react-redux'
import appStore from './Redux/appStore'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Provider store={appStore}>
        <Header />
        <div className='w-[85vw] h-[85vh] bg-img1 relative'>
          <img src="/assets/Weather-bg-image.png" alt="image" className='w-[100%] h-[100%] rounded-[25px] bg-img' />
          <Main />
        </div>
      </Provider>
    </>
  )
}

export default App
