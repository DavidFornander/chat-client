import { useState } from 'react'
import axios from 'axios';
import { postSlice } from '../chat/chatSlice';
import Card from '@mui/material/Card';
import React from 'react';
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography, Hidden } from '@mui/material';

const url = 'http://localhost:3000/users';

const GetUsers = () => {

    const [users, setUsers] = useState([{
        id: 0,
        name: 'init',
        email: 'init',
        password: 'init'
    }]);

    const getUsers = async () => {
        try {
            const { data } = await axios.get(url)
            console.log(data);
            setUsers(data);
        } catch (error) {
            console.log(error)
        }
    };

    function UL<T>({
        items,
        render,
        render2,
    }: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLUListElement>,
        HTMLUListElement
    > & {
        items: T[];
        render: (item: T) => React.ReactNode;
        render2: (item: T) => React.ReactNode;
    }) {
        return (
            <ul style={{margin: 0}}>
                {items.map((item, index) => (
                    <li style={{margin: 0, padding:0, }} key={index} >
                        <Card sx={{ 
                            padding: 1, 
                            width: 1, 
                            height: 1, 
                            bgColor: 'background.paper' 
                            }}>
                            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={render(item)}
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    {render2(item)}
                                                </Typography>
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                            </List>
                        </Card>
                    </li>
                ))}
            </ul>
        );
    }


    return (
        <div style={{margin: 0}}>
            <UL
                //onLoad={getUser}
                items={users}
                render={(data) => <>{data.name}</>}
                render2={(data) => <>{data.email}</>}
            >

            </UL>

            <button className='btn' onClick={getUsers}>
                Get Users
            </button>
        </div>
    )
}

export default GetUsers