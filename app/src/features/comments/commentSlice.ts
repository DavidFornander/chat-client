import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Comment {
    comment_id: Number,
    post_id: Number,
    name: String,
    content: String,
};

interface commentSliceState {
    comments: Comment[];
};

const initialState: commentSliceState = {
    comments: []
};

export const commentSlice = createSlice({
    name: 'comment',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        addComments: (state, action: PayloadAction<Comment[]>) => {
            state.comments = action.payload
        },
        remove: (state, action: PayloadAction<Number>) =>{
            
        }
    },
})

export const { addComments } = commentSlice.actions


