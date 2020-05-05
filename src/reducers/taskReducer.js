// Reducers will check the Actions and modify data in the store. It takes two arguments, Initial State Data and an Action

export default (state=[], action) => {
    let {type, payload} = action;
    
    switch(type) {
      case "SET_TASK": return payload;
      case "CREATE_TASK": return [...state, payload];
      case "ARCHIVE_TASK": return payload;
      case "DELETE_TASK": return state.filter(task => task._id !== payload._id);
      default: return state;
    }
}