// Reducers will check the Actions and modify data in the store. It takes two arguments, Initial State Data and an Action

export default (state=[], action) => {
    let {type, payload} = action;
    
    switch(type) {
      case "SET_GOAL": return payload;
      case "CREATE_GOAL": return [...state, payload];
      case "ARCHIVE_GOAL": 
      case "DELETE_GOAL":
      default: return state;
    }
}