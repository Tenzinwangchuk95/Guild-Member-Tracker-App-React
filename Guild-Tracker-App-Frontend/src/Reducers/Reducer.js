export default(state=[], action) => {

    switch(action.type){
      case "SET_MEMBERS":
        return [...action.payload]
      case "ADD_MEMBER":
        return [...state, action.payload]
      case "REMOVE_MEMBER":
        let newMembers = state.filter(member => member.id !== action.payload)
        return [...newMembers]
      default:
        return state
    }
  }