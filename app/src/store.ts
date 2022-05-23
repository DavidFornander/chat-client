
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Statement } from "sqlite";


interface Post {
    id: Number,
    usr: String,
    text: String,
};

// let a: Post = {
//     id: 21,
//     usr: 'david',
//     text: 'this is a message.'
// };

interface PostSliceState {
    posts: Post[];
};

const initialState: PostSliceState = {
    posts: []
};

export const postSlice = createSlice({
    name: 'post',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        add: (state, action: PayloadAction<String>) => {
            state.posts = [
                ...state.posts,
                {
                    id: state.posts.length,
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

const store = configureStore({
    reducer: {
        post: postSlice.reducer,
    }
})

type RootState = ReturnType<typeof store.getState>;

export const selectPosts = (state: RootState) => state.post.posts

// export type AppDispatch = typeof store.dispatch;

export default store;