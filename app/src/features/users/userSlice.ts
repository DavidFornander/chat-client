import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
    user_id: Number,
    name: String,
    email: String,
    password: String,
};

interface commentSliceState {
    users: User[];
};

const initialState: commentSliceState = {
    users: []
};


export const userSlice = createSlice({
    name: 'user',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<User[]>) => {
            state.users = action.payload
            console.log(state.users)
        },
        remove: (state, action: PayloadAction<Number>) =>{
            
        }
    }, 
})

export const { addUser } = userSlice.actions
