import {createSlice} from "@reduxjs/toolkit";

const notificationReducer = (state= '', action) => {
  switch (action.type) {
      case 'SET_MESSAGE':
          return action.message
      default:
          return state

  }
}

export const messageChange = message => {
  return{
      type:'SET_MESSAGE',
      message
  }
}

const initialState = ''

const notificationSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: messageChange

})

export default notificationSlice.reducer