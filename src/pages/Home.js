import React, {useState} from 'react'
import { Box } from '@mui/material'
import Exercises from '../components/Exercises'
import SearchExercises from '../components/SearchExercises'
import HeroBanner from '../components/HeroBanner'

const Home = () => {
    const [bodyPart, setBodyPart] = useState('all');
    const [exercises, setExercises] = useState([]);
  return (
    <Box>
        <HeroBanner />
        <SearchExercises 
            setExercises={setExercises}
            setBodyPart={setBodyPart}
            bodyPart={bodyPart}
        />
        <Exercises 
            setExercises={setExercises}
            bodyPart={bodyPart}
            exercises={exercises}
        />
    </Box>
  )
}

export default Home