import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Post {
    post_id: Number,
    user_id: Number,
    text: String,
};

interface postSliceState {
    posts: Post[];
};

const initialState: postSliceState = {
    posts: []
};

export const postSlice = createSlice({
    name: 'post',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        addPosts: (state, action: PayloadAction<Post[]>) => {
            state.posts = action.payload
        },
        remove: (state, action: PayloadAction<Number>) =>{
  
        }
    },
})

export const { addPosts } = postSlice.actions

