// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface Post {
//     id: Number,
//     usr: String,
//     text: String,
// };

// interface PostSliceState {
//     posts: Post[];
// };

// const initialState: PostSliceState = {
//     posts: []
// };

// export const postSlice = createSlice({
//     name: 'post',
//     // `createSlice` will infer the state type from the `initialState` argument
//     initialState,
//     reducers: {
//         add: (state, action: PayloadAction<String>) => {
//             state.posts = [
//                 ...state.posts,
//                 {
//                     id: state.posts.length,
//                     usr: 'david',
//                     text: action.payload,
//                 }
//             ]
//         },
//         remove: (state, action: PayloadAction<Number>) =>{
//             //Implement remove function here
//         }
//     },
// })

// export const { add } = postSlice.actions

export default {}