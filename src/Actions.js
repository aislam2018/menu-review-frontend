export const loadRestaurants = (restaurants) => ({ type: 'LOAD_RESTAURANTS', payload: restaurants })
export const selectItem = (itemId) => ({ type: 'SELECT_ITEM', payload: itemId })
export const addComment = (commentObj) => ({ type: 'ADD_COMMENT', payload: commentObj})
export const searchRestaurant = (searchTerm) => ({ type: 'SEARCH_RESTAURANT', payload: searchTerm})
export const getRestaurant = (resId) => ({ type: 'GET_RESTAURANT', payload: resId })
export const createUser = (userObj) => ({ type: 'CREATE_USER', payload: userObj })
export const loginUser = (userObj) => ({ type: 'LOGIN_USER', payload: userObj })
export const editComment = (editedCommentObj) => ({ type: 'EDIT_COMMENT', payload: editedCommentObj})
export const deleteComment = (deleteObj) => ({ type: 'DELETE_COMMENT', payload: deleteObj})
export const logoutUser = () => ({ type: 'LOGOUT_USER' })
