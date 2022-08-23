import anecdotes from "../services/anecdotes";

import {createSlice} from "@reduxjs/toolkit";


const anecdoteSlice = createSlice(
    {
      name:'anecdotes',
      initialState: [],
      reducers : {
        vote(state, action) {
          const id = action.payload
          const toVote = state.find(n => n.id === id)
          const voted = {
            ...toVote, votes: toVote.votes+1
          }
          return state.map(anecdote => anecdote.id !== id ? anecdote : voted)
        },
        appendAnecdote(state, action) {
          state.push(action.payload)
        },
        setAnecdotes(state, action){
          return action.payload
        }
      }
    }
)

export const {vote, setAnecdotes, appendAnecdote} = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const notes = await anecdotes.getAll()
    dispatch(setAnecdotes(notes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newNote = await anecdotes.createNew(content)
    dispatch(appendAnecdote(newNote))
  }
}

export default anecdoteSlice.reducer