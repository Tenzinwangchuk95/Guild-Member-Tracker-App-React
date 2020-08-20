export const fetchMembers = () => {
    return(dispatch) => {
      return fetch('http://localhost:3001/members')
      .then(resp => resp.json())
      .then(members => {
          debugger
        dispatch({ type: "SET_MEMBERS", payload: members })
      })
    }
  }
  
  
export const addMember = member => {
return(dispatch) => {
    return fetch('http://localhost:3001/members', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({member:member})
    })
    .then(resp => resp.json())
    .then(member => {
    dispatch({ type: "ADD_MEMBER", payload: member })
    })
} 
}

export const removeMember = memberId => {
return(dispatch) => {
    return fetch(`http://localhost:3001/members/${memberId}`, {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    }
    })
    .then(resp => resp.json())
    .then(member => {
    dispatch({ type: "REMOVE_MEMBER", payload: memberId })
    })
} 
}