//Packages, Features, etc
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from '@mui/material';

//Css, Images, etc
import './App.css';
import { theme } from './shared/theme'

//Pages
import LoginPage from './pages/LogIn.page';
import HomePage from './pages/Home.page';
import OtherPage from './pages/Other.page';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addUser } from './features/users/userSlice';
import { addComment } from './features/comments/commentSlice';
import { addPost } from './features/post/postSlice';

//URLs
const url_users = 'http://localhost:3000/users';
const url_posts = 'http://localhost:3000/posts';
const url_comments = 'http://localhost:3000/comments'


const App: React.FC = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    const fetchUsersOnLoad = async () => {
      try {
        const { data } = await axios.get(url_users)
        console.log(data);
        //setUsers(data);
        dispatch(addUser(data))
      } catch (error) {
        console.log(error)
      }
    };
    const fetchPostsOnLoad = async () => {
      try {
        const { data } = await axios.get(url_posts)
        console.log(data);
        console.log("this");
        
        //setUsers(data);
        dispatch(addPost(data))
      } catch (error) {
        console.log(error)
      }
    };
    const fetchCommentsOnLoad = async () => {
      try {
        const { data } = await axios.get(url_comments)
        console.log(data);
        //setUsers(data);
        dispatch(addComment(data))
      } catch (error) {
        console.log(error)
      }
    };
    fetchUsersOnLoad();
    fetchPostsOnLoad();
    //fetchCommentsOnLoad();
  }, []);

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
