import { Outlet } from 'react-router-dom';
import './App.css'
import About from './components/About';
import Body from './components/Body'
import Contact from './components/Contact';
import Header from './components/Header'


function App() {

  return (
   <div className='app'>
      <Header />
      {/* <Body /> */}
      <Outlet />
   </div>
  )
}

export default App
