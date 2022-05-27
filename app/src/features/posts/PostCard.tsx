import { Avatar, Card, CardActions, CardContent, CardHeader, Collapse, styled, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import React, { ReactNode } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { purple } from '@mui/material/colors';

import GetComments from '../comments/GetComments'
import AddComment from '../comments/AddComment';
import { useSelector } from 'react-redux';
import { selectComments } from '../../app/store';



interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

// Element, used to open comment section
const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

// Filter, used to filter what comments to show on which post (Based on post_id)
const filter = (arr: any[], post_id: number) => {
    let filtered_comments: any[] = []
    arr.forEach(element => {
        if (element.post_id == post_id) {
            filtered_comments.push(element)
        }
    });
    return (filtered_comments)
}

// Props
type PosterProps = {
    post_id: number
    user_name: ReactNode
    comment_text: ReactNode, 
}


const PostCard = (props: PosterProps) => {
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => { setExpanded(!expanded); };

    const comments = useSelector(selectComments)


    return (

        <Card sx={{ maxWidth: 900, margin: 1 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: purple[200] }} aria-label="recipe">
                        {props.user_name}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={props.user_name}
                subheader="Maj, 2022 (placeholder)"
            />

            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {props.comment_text}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <GetComments posts_filtered={filter(comments, props.post_id)} />
                    <AddComment post_id={props.post_id} />
                </CardContent>
            </Collapse>
        </Card>
    )
}

export default PostCard


