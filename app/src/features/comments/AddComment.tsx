import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import React, { FormEvent, useState } from 'react'
import { addComment } from './commentSlice';

const url = 'http://localhost:3000/api/comments';

type PosterProps = {
    post_id: number
  } 

const AddComment = (props: PosterProps) => {

    // Post template 
    const comment = {
        post_id: 0,
        name: 'init',
        content: 'init',
    };

    // Adds new posts to database
     const addComment = async (temp_data: typeof comment) => {
        try {
            axios.post(url, temp_data)
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

    // Submithandler for form 
    const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const target = e.target as typeof e.target & {
            temp_name: { value: string }
            temp_text: { value: string }            
        }

        //Check that no fields are empty
        if (target.temp_name.value != "" && target.temp_text.value != "") {
            addComment({
                post_id: props.post_id,
                name: target.temp_name.value,
                content: target.temp_text.value})

                console.log(target.temp_text.value);
                console.log("msg: Sent")
  
        }
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                
            <TextField
                    sx={{ width: 1.5 / 10 }}
                    type='text'
                    name='temp_name'
                    id='temp_name'
                    size='small'
                    label='Name'
                />
                <TextField
                    sx={{ width: 5/10, marginLeft: 4, marginRight: 5 }}
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

export default AddComment


