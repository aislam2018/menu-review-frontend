const initialState = {
  restaurants: [],
  selectedItem: {},
  comments: [],
  searchTerm: ""

}


const reducer = (state = initialState, action) => {
console.log(state)
  switch (action.type) {

    case 'LOAD_RESTAURANTS': {
      return { ...state, restaurants: action.payload }
    }
    case 'SELECT_ITEM': {
      return { ...state, selectedItem: action.payload, comments:action.payload.comments }

    }
    case 'ADD_COMMENT': {
      return {...state, comments:[action.payload, ...state.comments]}
    }
    case 'SEARCH_RESTAURANT': {
      return {...state, searchTerm: action.payload}
    }

    default:
      return state
  }
}

export default reducer
