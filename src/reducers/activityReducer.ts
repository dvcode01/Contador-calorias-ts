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
        let updatedActivities: Activity[] = [];

        if(state.activeID){
            updatedActivities = state.activities.map(activity => activity.id === state.activeID ? action.payload.newActivity : activity);
        }else{
            updatedActivities = [...state.activities, action.payload.newActivity]
        }
        
        return {
            ...state, 
            activities: updatedActivities,
            activeID: ''
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