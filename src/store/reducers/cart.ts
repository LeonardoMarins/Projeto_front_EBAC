import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { CardapioItem } from '../../pages/Home'

// Define a type for the slice state
interface CounterState {
  isOpen: boolean
  adicionar: CardapioItem[]
}

// Define the initial state using that type
const initialState: CounterState = {
  isOpen: false,
  adicionar: []
}

export const counterSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CardapioItem>) => {
      state.adicionar.push(action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { open, close, add } = counterSlice.actions

export default counterSlice.reducer
