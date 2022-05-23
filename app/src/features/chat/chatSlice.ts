import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface User {
    id: Number,
    usr: String,
    text: String,
};

interface PostSliceState {
    users: User[];
};

const initialState: PostSliceState = {
    users: []
};

export const postSlice = createSlice({
    name: 'post',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        add: (state, action: PayloadAction<String>) => {
            state.users = [
                ...state.users,
                {
                    id: state.users.length,
                    usr: 'david',
                    text: action.payload,
                }
            ]
        },
        remove: (state, action: PayloadAction<Number>) =>{
            
        }
    },
})

export const { add } = postSlice.actions






export default {}