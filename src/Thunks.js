
import { loadRestaurants, selectItem, addComment, createUser, loginUser, editComment, deleteComment } from './Actions'

export const getRestaurants = () => dispatch => {
  return fetch("http://localhost:3000/api/v1/restaurants", {
        headers: {
          "content-type": "application/json",
          Accepts: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`

        }
      })
    .then(r => r.json())
    .then(data => dispatch(loadRestaurants(data)))
  }


export const getItem = (itemId) => dispatch => {

  return fetch(`http://localhost:3000/api/v1/items/${itemId}`, {
        headers: {
          "content-type": "application/json",
          Accepts: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`

        }
      })
    .then(r => r.json())
    .then(item => dispatch(selectItem(item)))
}

export const getComment = (commentObj) => dispatch => {
  console.log(commentObj)
  return fetch(`http://localhost:3000/api/v1/items/${commentObj.itemId}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accepts: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
      },
        body:JSON.stringify({content:commentObj.comment, item_id:commentObj.itemId})
      }).then(res => res.json())
      .then(data => dispatch(addComment(data)))
}
export const getEditedComment = (editedCommentObj) => dispatch => {

  return fetch(`http://localhost:3000/api/v1/items/${editedCommentObj.itemId}/comments/${editedCommentObj.commentId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accepts: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
      },
        body:JSON.stringify({content:editedCommentObj.comment, item_id:editedCommentObj.itemId})
      }).then(res => res.json())
      .then(data => dispatch(editComment(data)))
}

export const getDeleteComment = (deleteObj, redirect) => dispatch => {
  console.log('redirect', redirect)

  return fetch(`http://localhost:3000/api/v1/items/${deleteObj.itemId}/comments/${deleteObj.commentId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accepts: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
      }

    }).then(res => redirect())

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
      return fetch('http://localhost:3000/api/v1/login', {
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
