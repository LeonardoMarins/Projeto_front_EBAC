import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { CardapioItem } from '../../pages/Home'

// Define a type for the slice state
interface CounterState {
  isOpen: boolean
  cardapio: CardapioItem[]
}

// Define the initial state using that type
const initialState: CounterState = {
  isOpen: false,
  cardapio: []
}

export const counterSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CardapioItem>) => {
      state.cardapio.push(action.payload)
    },
    remove: (state, action: PayloadAction<number>) => {
      state.cardapio = state.cardapio.filter(
        (item) => item.id != action.payload
      )
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { open, close, add, remove } = counterSlice.actions

export default counterSlice.reducer
