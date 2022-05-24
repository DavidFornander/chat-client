import { TextField, Button } from '@mui/material'
import React, { FormEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selectPosts } from '../../store';
import "../../index.css";
import { positions } from '@mui/system';
import { add } from '../../reducers/PostReducer';

const MessageBar = () => {

  const posts = useSelector(selectPosts)
  const dispatch = useDispatch();

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      name: { value: string }
    }

    if (target.name.value != "") {
      dispatch(add(target.name.value))
    }
    console.log("msg: Sent")
  }

  return (
    <div>
      <form onSubmit={onSubmitHandler} className="form">
        <TextField
          sx={{ width: 3 / 5 }}
          type='text'
          name='name'
          id='name'
          size='small'
        />
        <Button
          sx={{ 
            width: 1 / 5,
            marginLeft: 4,
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

export default MessageBar