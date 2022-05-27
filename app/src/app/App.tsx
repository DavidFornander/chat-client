import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from '@mui/material';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { addUser } from '../features/users/userSlice';
import { addComments } from '../features/comments/commentSlice';
import { addPosts } from '../features/posts/postSlice';
import './App.css';
import { theme } from '../shared/theme'
import LoginPage from '../pages/LogIn.page';
import HomePage from '../pages/Home.page';
import OtherPage from '../pages/Other.page';
;

// ----- URLs to API -----
const url_users = 'http://localhost:3000/api/users';
const url_posts = 'http://localhost:3000/api/posts';
const url_comments = 'http://localhost:3000/api/comments'
// -----------------------


const App: React.FC = () => {

  // Redux store
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchUsersOnLoad = async () => {
      try {
        const { data } = await axios.get(url_users)
        console.log(data);
        dispatch(addUser(data))
      } catch (error) {
        console.log(error)
      }
    };
    const fetchPostsOnLoad = async () => {
      try {
        const { data } = await axios.get(url_posts)
        console.log(data);
        dispatch(addPosts(data))
      } catch (error) {
        console.log(error)
      }
    };
    const fetchCommentsOnLoad = async () => {
      try {
        const { data } = await axios.get(url_comments)
        console.log(data);
        dispatch(addComments(data))
      } catch (error) {
        console.log(error)
      }
    };
    fetchUsersOnLoad();
    fetchPostsOnLoad();
    fetchCommentsOnLoad();
  }, );

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/messages' element={<HomePage />} />
          <Route path='/other' element={<OtherPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
