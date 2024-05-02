import { Activity } from "../types"

export type ActivityActions = 
    // Payload = parametros que le pasas al reducer
    {type: 'save-activity', payload: {newActivity: Activity}} |
    {type: 'set-activeID', payload: {id: Activity['id']}}

export type ActivityState = {
    activities: Activity[],
    activeID: Activity['id']

}

export const initialState : ActivityState = {
    activities: [],
    activeID: ''
}

export const activityReducer = (state: ActivityState = initialState, action: ActivityActions) => {
    if(action.type === 'save-activity'){
        // Maneja la logica para cambiar actualizar el state
        return {
            ...state, 
            activities: [...state.activities, action.payload.newActivity]
        }
    }

    if(action.type === 'set-activeID'){
        return{
            ...state,
            activeID: action.payload.id
        }
    }

    return state;
} 