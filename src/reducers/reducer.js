const initialState = {
  restaurants: [],
  selectedItem: {},
  searchTerm: "",
  selectedRestaurant: {},
  user: {}

}


const reducer = (state = initialState, action) => {


  switch (action.type) {

    case 'LOAD_RESTAURANTS': {
      return { ...state, restaurants: action.payload }
    }
    case 'SELECT_ITEM': {
      return { ...state, selectedItem: action.payload }

    }
    case 'ADD_COMMENT': {
      return {...state, selectedItem:{...state.selectedItem, comments:[...state.selectedItem.comments, action.payload]}}
    }
    case 'EDIT_COMMENT': {
       let updatedComments = state.selectedItem.comments.map( comment => {
         if (comment.id === action.payload.id) {
           return action.payload
         } else {
           return comment
         }
       })

      return {...state, selectedItem:{...state.selectedItem, comments: updatedComments}}
    }
    case 'DELETE_COMMENT': {
      let updatedComments = state.selectedItem.comments.filter(comment => comment.id !== action.payload.id)
        return {...state, selectedItem:{...state.selectedItem, comments: updatedComments}}
    }
    case 'SEARCH_RESTAURANT': {
      return {...state, searchTerm: action.payload}
    }
    case 'GET_RESTAURANT': {

      let selectedRestaurant = state.restaurants.find(res => res.id === action.payload)
      return {...state, selectedRestaurant: selectedRestaurant}
    }
    case 'CREATE_USER': {
      return { ...state, user: action.payload }

    }
    case 'LOGIN_USER': {
      return { ...state, user: action.payload }

    }
    case 'LOGOUT_USER': {
      localStorage.removeItem('token')
      return initialState

    }
    default:
      return state
  }

}

export default reducer
