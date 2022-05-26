import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";


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
        addComment: (state, action: PayloadAction<Comment[]>) => {
            state.comments = action.payload
        },
        remove: (state, action: PayloadAction<Number>) =>{
            
        }
    },
})

export const { addComment } = commentSlice.actions


