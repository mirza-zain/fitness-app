import { configureStore } from "@reduxjs/toolkit"
import ToggleExercise from "../slice/ExerciseSlice"

const exerciseStore = configureStore({
    reducer: {
        exercise: ToggleExercise
    }
})

export default exerciseStore