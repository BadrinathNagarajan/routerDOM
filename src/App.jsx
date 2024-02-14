import { useState } from 'react'
import Navbar from './components/Navbar'
import Image from './components/Image'
import Elementor from './components/Elementor'
import Dashboard from './components/Dashbaord'
import Fullstack from './components/Fullstack'
import Datascience from './components/Datascience'
import Cybersecurity from './components/Cybersecurity'
import Career from './components/Career'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="wrapper">  
    <BrowserRouter>
    {/* <Navbar/> 
    <Image/>     */}
    <Elementor/>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/fullstack' element={<Fullstack/>}/>
      <Route path='/datascience' element={<Datascience/>}/>
      <Route path='/cybersecurity' element={<Cybersecurity/>}/>      
      <Route path='/career' element={<Career/>}/>
      <Route path='*' element={<Navigate to='/'/>}/>
    </Routes>     
    {/* <Dashboard/>  */}
    </BrowserRouter> 
   </div>
  )
}

export default App
