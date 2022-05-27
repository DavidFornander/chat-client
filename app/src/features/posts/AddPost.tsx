import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { FormEvent } from 'react'
import { useDispatch } from 'react-redux';

import { addPosts } from './postSlice';

// URLs to api
const url_posts = 'http://localhost:3000/api/posts';


const AddPostBar = () => {

    // Redux store
    const dispatch = useDispatch()

    // Post template 
    const post = {
        user_id: 0,
        text: 'init',
    };

    // Adds new posts to database
    const addPostToDb = async (temp_data: typeof post) => {
        try {
            axios.post(url_posts, temp_data)
                .then(function (res) {
                    console.log(res);
                })
                .catch(function (res) {
                    console.log(res)
                })

        } catch (error) {
            console.log(error)
        }
    };

    const fetchPosts = async () => {
        try {
            const { data } = await axios.get(url_posts)
            console.log(data);
            dispatch(addPosts(data))
        } catch (error) {
            console.log(error)
        }
    };

    // Recievs data from form when button is pressed
    const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const target = e.target as typeof e.target & {
            temp_user_id: { value: number }
            temp_text: { value: string }
        }

        //Check that no fields are empty
        if (target.temp_user_id.value != 0 && target.temp_text.value != "") {
            addPostToDb({
                user_id: target.temp_user_id.value,
                text: target.temp_text.value
            })// Sends new comment to database

            console.log("msg: Sent")
            fetchPosts(); // Updates redux store from database
        }
    }

    return (
        <div className='Footer_div'>
            <form onSubmit={onSubmitHandler} className="form">
                <TextField
                    sx={{ width: 2 / 10 }}
                    type='text'
                    name='temp_user_id'
                    id='temp_user_id'
                    size='small'
                    label='Name'
                />
                <TextField
                    sx={{ width: 5 / 10, marginLeft: 4, marginRight: 4 }}
                    type='text'
                    name='temp_text'
                    id='temp_text'
                    size='small'
                    label='Text'
                />
                <Button
                    sx={{
                        width: 1 / 5,
                    }}
                    className='bt'
                    type='submit'
                >
                    Post
                </Button>
            </form>
        </div>
    )
}

export default AddPostBar


