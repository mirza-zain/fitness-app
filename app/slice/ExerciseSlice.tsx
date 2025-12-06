import { createSlice } from "@reduxjs/toolkit"
import Weeks from "../Components/DaysList"

const exercsiseSlice = createSlice({
    name: 'exercise',
    initialState: { weeks: Weeks },
    reducers: {
        toggleStatus: (state, action) => {
            const exerciseId = action.payload
            for(const day of state.weeks) {
                const item = day.items.find((i) => i.id == exerciseId)
                if(item) {
                    item.isCompleted = !item.isCompleted
                    break
                }
            }
        },
        addExercise: (state, action) => {
            const { day, exercise } = action.payload
            const dayObj = state.weeks.find((d) => d.day === day)
            if(dayObj) {
                dayObj.items.push(exercise)
            }
        }
    }
})

export const { toggleStatus, addExercise } = exercsiseSlice.actions
export default exercsiseSlice.reducer