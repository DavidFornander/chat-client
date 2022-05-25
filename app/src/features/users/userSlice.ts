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
    name: 'users',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<String>) => {
            state.users = [
                ...state.users,
                {
                    user_id: 0,
                    name: "t",
                    email:"",
                    password: "",
                }
            ]
        },
        remove: (state, action: PayloadAction<Number>) =>{
            
        }
    },
})

export const { addUser } = userSlice.actions
