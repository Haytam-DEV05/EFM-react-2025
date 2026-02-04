import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  matchs: []
}

export const SliceMatchs = createSlice({
  name: 'matchs',
  initialState,
  reducers: {
    setMatchs: (state, action) => {
      state.matchs = action.payload
    },

    likeMatch: (state, action) => {
      const match = state.matchs.find(m => m.id === action.payload)
      if (match) {
        match.like += 1
      }
    },

    deslikeMatch: (state, action) => {
      const match = state.matchs.find(m => m.id === action.payload)
      if (match) {
        match.deslike += 1
      }
    }
  }
})

export const { setMatchs, likeMatch, deslikeMatch } = SliceMatchs.actions
export default SliceMatchs.reducer
