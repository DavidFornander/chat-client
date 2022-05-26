import { configureStore} from "@reduxjs/toolkit";
import { commentSlice } from "./features/comments/commentSlice";
import { userSlice } from "./features/users/userSlice";
import { postSlice } from "./features/posts/postSlice";
//import { postSlice } from "./reducers/PostReducer";


const store = configureStore({
    reducer: {
        post: postSlice.reducer,
        comment: commentSlice.reducer,
        user: userSlice.reducer,
    }
})

type RootState = ReturnType<typeof store.getState>;

export const selectPosts = (state: RootState) => state.post.posts

export const selectComments = (state: RootState) => state.comment.comments

export const selectUsers= (state: RootState) => state.user.users




// export type AppDispatch = typeof store.dispatch;

export default store;