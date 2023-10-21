import { createSlice } from '@reduxjs/toolkit';

const rotateSlice = createSlice({
    name: 'rotate',
    initialState: { count: 0 }, // Set the initial state as an empty array
    reducers: {
        increment: (state, action) => {
            return { ...state, count: state.count + 2 }
        },
        decrement: (state, action) => {
            return { ...state, count: state.count - 2 }
        },
        reset: (state, action) => {
            return { ...state, count: 0 }
        }
    }
});

export const { increment, decrement,reset } = rotateSlice.actions;
export default rotateSlice.reducer;
