import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Box } from '@mui/system'
import Navbar from './components/Navbar'
import ExerciseDetail from './components/ExerciseDetail'
import Home from './pages/Home'
import Footer from './components/Footer'

const App = () => {
  return (
    <Box width="400px" sx={{width : {xl : '1448px'}}} m="auto"> 
        <Navbar />
        <Routes>
            <Route path='/' element={ <Home/>}/>
            <Route path='/exercise/:id' element={ <ExerciseDetail/> } />
        </Routes>
        <Footer/>
    </Box>
  )
}

export default App