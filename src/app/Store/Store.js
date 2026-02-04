import { configureStore } from '@reduxjs/toolkit'
import SliceMatchs from '../../Features/Slice/SliceMatchs'

export const Store = configureStore({
  reducer: {
    matchs: SliceMatchs
  }
})
