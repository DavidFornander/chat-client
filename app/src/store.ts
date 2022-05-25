import { configureStore} from "@reduxjs/toolkit";
import { commentSlice } from "./features/comments/commentSlice";
import { postSlice } from "./reducers/PostReducer";


const store = configureStore({
    reducer: {
        post: postSlice.reducer,
        comment: commentSlice.reducer,
    }
})

type RootState = ReturnType<typeof store.getState>;

export const selectPosts = (state: RootState) => state.post.posts


// export type AppDispatch = typeof store.dispatch;

export default store;