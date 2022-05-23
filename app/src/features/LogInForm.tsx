import { FC, FormEvent } from 'react';

import { Box, TextField, Typography, InputLabel, Button } from '@mui/material'
import { VerticalAlignCenter } from '@mui/icons-material';


const LogInForm: FC = () => {

    const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("ping")
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