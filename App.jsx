import Home from './pages/Home'
import Examples from './pages/Examples'
import Contacts from './pages/Contacs'
import About from './pages/About'
import './App.css'
import Navbar from './Navbar'
import {Routes,Route} from 'react-router-dom'

function App() {

  return (
    <>

      <div className='container'>
        <header>
      <Navbar/> 
      </header>
      <main>   
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/examples' element={<Examples/>}/>
          <Route path='/contacs' element={<Contacts/>}/>          
        </Routes>
        </main> 
        </div>
    
    </>
  )
}

export default App
