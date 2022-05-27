import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { FormEvent} from 'react'
import { useDispatch } from 'react-redux';
import { addComments } from './commentSlice';

const url_comments = 'http://localhost:3000/api/comments';

type PosterProps = {
    post_id: number
}

const AddComment = (props: PosterProps) => {

    const dispatch = useDispatch()

    // Post template 
    const comment = {
        post_id: 0,
        name: 'init',
        content: 'init',
    };

    // Adds new posts to database
    const addCommentToDb = async (temp_data: typeof comment) => {
        try {
            axios.post(url_comments, temp_data)
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

    const fetchComments = async () => {
        try {
            const { data } = await axios.get(url_comments)
            console.log(data);
            dispatch(addComments(data))
        } catch (error) {
            console.log(error)
        }
    }

    // Submithandler for form 
    const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const target = e.target as typeof e.target & {
            temp_name: { value: string }
            temp_text: { value: string }
        }

        //Check that no fields are empty
        if (target.temp_name.value != "" && target.temp_text.value != "") {
            addCommentToDb({
                post_id: props.post_id,
                name: target.temp_name.value,
                content: target.temp_text.value
            }) // Sends new comment to database

            console.log("msg: Sent");
            fetchComments(); // Updates redux store from database
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
                    sx={{ width: 5 / 10, marginLeft: 4, marginRight: 5 }}
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


