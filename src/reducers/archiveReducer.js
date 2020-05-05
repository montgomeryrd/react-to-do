// Reducers will check the Actions and modify data in the store. It takes two arguments, Initial State Data and an Action

export default (state=[], action) => {
    let {type, payload} = action;
    
    switch(type) {
        case "SET_ARCHIVE": return payload;
        case "APPEND_TASK_ARCHIVE": return [...state, payload];
        case "APPEND_GOAL_ARCHIVE": 
        case "DELETE_TASK_ARCHIVE":
        case "DELETE_GOAL_ARCHIVE":
        default: return state;
    }
}