import { Activity } from "../types"

export type ActivityActions = 
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
        console.log('desde el type de save-activity');
    }
} 