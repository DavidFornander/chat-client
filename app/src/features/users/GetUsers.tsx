
import axios from 'axios';
import Card from '@mui/material/Card';
import React from 'react';
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography, Hidden } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { addUser } from './userSlice';
import { selectUsers } from '../../store';

const url_users = 'http://localhost:3000/users';

const GetUsers = () => {

    // const [users, setUsers] = useState([{
    //     user_id: 0,
    //     name: 'anonymus',
    //     email: 'anonymus@gmail.com',
    //     password: 'init'
    // }]);
    
    const users = useSelector(selectUsers)

    const user = users[0]

    const dispatch = useDispatch()

    const fetchUsersManual = async () => {
        try {
            const { data } = await axios.get(url_users)
            console.log(data);
            //setUsers(data);
            dispatch(addUser(data))
        } catch (error) {
            console.log(error)
        }
    };

    function UL<T>({
        items,
        render_name,
        render_email,
        render_user_id,
    }: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLUListElement>,
        HTMLUListElement
    > & {
        items: T[];
        render_name: (item: T) => React.ReactNode;
        render_email: (item: T) => React.ReactNode;
        render_user_id: (item: T) => React.ReactNode;
    }) {
        return (
            <ul style={{ margin: 0 }}>
                {items.map((item, index) => (
                    <li key={index} >
                        <Card sx={{
                            padding: 1,
                            width: 1,
                            height: 1,
                            bgColor: 'background.paper'
                        }}>
                            <List sx={{ minWidth: 300, bgcolor: 'background.paper' }}>
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar alt={""} src="/static/images/avatar/1.jpg" />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={render_name(item)}
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    {render_email(item)}
                                                </Typography>
                                            </React.Fragment>
                                        }
                                    />
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Usr_ID:{render_user_id(item)}
                                    </Typography>
                                </ListItem>
                            </List>
                        </Card>
                    </li>
                ))}
            </ul>
        );
    }


    return (
        <div style={{ width: '100%', margin: 0 }}>
            <UL
                items={users}
                render_name={(data) => <>{data.name}</>}
                render_email={(data) => <>{data.email}</>}
                render_user_id={(data) => <>{data.user_id}</>}
            >
            </UL>
            <button className='btn' onClick={fetchUsersManual}>
                Update Users
            </button>
        </div>
    )
}

export default GetUsers