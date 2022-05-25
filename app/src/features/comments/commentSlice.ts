import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface Comment {
    comment_id: Number,
    post_id: Number,
    user_id: Number,
    text: String,
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
        addComment: (state, action: PayloadAction<String>) => {
            state.comments = [
                ...state.comments,
                {
                    comment_id: state.comments.length,
                    post_id: 0,
                    user_id: 0,
                    text: action.payload,
                }
            ]
        },
        remove: (state, action: PayloadAction<Number>) =>{
            
        }
    },
})

export const { addComment } = commentSlice.actions


