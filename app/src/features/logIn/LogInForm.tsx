import { FC, FormEvent, useRef } from 'react';

import { Provider, useSelector, useDispatch } from 'react-redux';
import store, { selectPosts, add } from '../../store';

import { Box, TextField, Typography, InputLabel, Button } from '@mui/material';



const LogInForm: FC = () => {

    const posts = useSelector(selectPosts)
    const dispatch = useDispatch();

    const newUserRef = useRef<HTMLInputElement>(null);

    const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            name: {value: string}
        }

        console.log(target.name.value)
        dispatch(add(target.name.value))
    }

    return (
        <Box sx={{
            border: 1,
            padding: 2,
            width: '300px',
            marginTop: 2,
        }}
        >
            <form onSubmit={onSubmitHandler}>
                <Typography textAlign='center' fontWeight='bold'> Welcome </Typography>
                <InputLabel> Name</InputLabel>
                <TextField type='text' name='name' id='name' fullWidth />
                <Button
                    style={{
                        marginTop: 10,
                        padding: 2,
                        backgroundColor: '#0fcf50'
                    }}
                    type='submit'
                    fullWidth
                >
                    log-in
                </Button>
            </form>
        </Box>
    )
}

export default LogInForm
