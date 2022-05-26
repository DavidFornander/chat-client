import React, { useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { useSelector } from 'react-redux';
import { selectComments } from '../../store';
import { SetState } from 'immer/dist/internal';



type PostProps = {
    posts_filtered: any[]
}


const GetComments = (props: PostProps) => { 

    const comments = useSelector(selectComments)
        
    function UL<T>({
        items,
        render_name,
        render_text,
        render_user_id,
    }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>,HTMLUListElement> & {
        items: T[];
        render_name: (item: T) => React.ReactNode;
        render_text: (item: T) => React.ReactNode;
        render_user_id: (item: T) => React.ReactNode;
    }) {
        return (
            <ul style={{ margin: 0 }}>
                {items.map((item, index) => (
                    <li key={index} >
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
                                                    {render_text(item)}
                                                </Typography>
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                            </List>
                    </li>
                ))}
            </ul>
        );
    }

    return (
        <div style={{ width: '100%', margin: 0 }}>
        <UL
            items={props.posts_filtered}
            render_name={(data) => <>{data.name}</>}
            render_text={(data) => <>{data.content}</>}
            render_user_id={(data) => <>{data.comment_id}</>}
        >
        </UL>
    </div>
    )
}

export default GetComments