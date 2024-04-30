import { Activity } from "../types"

export type ActivityActions = 
    // Payload = parametros que le pasas al reducer
    {type: 'save-activity', payload: {newActivity: Activity}}

type ActivityState = {
    activities: Activity[]
}

export const initialState : ActivityState = {
    activities: []
}

export const activityReducer = (state: ActivityState = initialState, action: ActivityActions) => {
    if(action.type === 'save-activity'){
        // Maneja la logica para cambiar actualizar el state
        return {
            ...state, 
            activities: [...state.activities, action.payload.newActivity]
        }
    }
} 