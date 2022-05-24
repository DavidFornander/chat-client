import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import React, { FormEvent, useState } from 'react'
import { add } from '../../reducers/PostReducer';

const url = 'http://localhost:3000/posts';

const AddPostBar = () => {

    const [post, setPost] = useState({
        user_id: 0,
        text: 'init',
    });

    const addPost = async (temp_data: typeof post ) => {
        try {
            axios.post(url, temp_data)
            .then(function(res){
                console.log(res);   
            })
            .catch(function(res){
                console.log(res)
            })

        } catch (error) {
            console.log(error)
        }
    };  

    const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const target = e.target as typeof e.target & {
            temp_user_id: { value: number }
            temp_text: { value: string }
        }

        console.log(target);
        

        if (target.temp_user_id.value!= 0 && target.temp_text.value!= "" ) {
            addPost({
                user_id: target.temp_user_id.value,
                text: target.temp_text.value  
            })
            console.log("msg: Sent")
        }    
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler} className="form">
                <TextField
                    sx={{ width: 1 / 5 }}
                    type='number'
                    name='temp_user_id'
                    id='temp_user_id'
                    size='small'
                    label='User ID'
                />
                <TextField
                    sx={{ width: 2 / 5, marginLeft: 4, marginRight:4 }}
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
                    Send
                </Button>
            </form>
        </div>
    )
}

export default AddPostBar

function dispatch(arg0: any) {
    throw new Error('Function not implemented.');
}
