import { TextField, Button } from '@mui/material'
import React, { FormEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { add, selectPosts } from '../../store';

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
      <form onSubmit={onSubmitHandler}>
          <TextField type='text' name='name' id='name' />
          <Button
            className='btn-hipster'
            type='submit'
          >
            Send
          </Button>
        </form>
    </div>
  )
}

export default MessageBar