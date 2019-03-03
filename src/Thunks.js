
import { loadRestaurants, selectItem, addComment, createUser, loginUser } from './Actions'

export const getRestaurants = () => dispatch => {
  return fetch('http://localhost:3000/api/v1/restaurants')
    .then(r => r.json())
    .then(data => dispatch(loadRestaurants(data)))
}

export const getItem = (itemId) => dispatch => {
  return fetch(`http://localhost:3000/api/v1/items/${itemId}`)
    .then(r => r.json())
    .then(item => dispatch(selectItem(item)))
}

export const getComment = (commentObj) => dispatch => {
  return fetch('http://localhost:3000/api/v1/items/1/comments', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body:JSON.stringify({content: commentObj.content, user_id: 1})
      }).then(res => res.json())
      .then(data => dispatch(addComment(data)))
}

export const getUserInfo = (userObj) => dispatch => {
  return fetch('http://localhost:3000/api/v1/users', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body:JSON.stringify({user: userObj})
      }).then(res => res.json())
      .then(data => {
        localStorage.setItem('token', data.jwt)
        dispatch(createUser(data))
      })
    }

  export const getLogin = (userObj) => dispatch => {
      return fetch('http://localhost:3000/api/v1/users', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body:JSON.stringify({user: userObj})
        }).then(res => res.json())
        .then(data => {
          localStorage.setItem('token', data.jwt)
          dispatch(loginUser(data))
        })
      }
