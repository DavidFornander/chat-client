import { useEffect, useState } from 'react'
import axios from 'axios';
import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { purple } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { selectComments, selectPosts } from '../../store';
import { useSelector } from 'react-redux';
import GetComments from '../comments/GetComments';
import AddComment from '../comments/AddComment';


const url_post = 'http://localhost:3000/api/posts';
const url_user_name = 'http://localhost:3000/api/users:';


interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

// FIX CSS, Lägg i klass, sen ny klass 
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


const GetPosts = () => {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => { setExpanded(!expanded); };
  
  const posts = useSelector(selectPosts)
  const comments = useSelector(selectComments)


  //FILTER
  const filter = (arr: any[], post_id: number) => {
    let filtered_comments: any[] = []
    arr.forEach(element => {
      if (element.post_id == post_id) {
        filtered_comments.push(element)
      }
    });
    return (filtered_comments)
  }

  // Function for desplaying posts
  function UL<T>({
    items,
    render_name,
    render_text,
  }: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > & {
    items: T[];
    render_name: (item: T) => React.ReactNode;
    render_text: (item: T) => React.ReactNode;
  }) {
    return (
      <ul style={{ margin: 0 }}>
        {items.map((item, index) => (
          <li style={{ margin: 0, padding: 0, }} key={index} >
            <Card sx={{ maxWidth: 900, margin: 1 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: purple[200] }} aria-label="recipe">
                    {render_name(item)}
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={render_name(item)}
                subheader="Maj, 2022 (placeholder)"
              />

              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {render_text(item)}
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
                  <GetComments posts_filtered={filter(comments, index)} />
                  <AddComment post_id={index} />
                </CardContent>
              </Collapse>
            </Card>
          </li>
        ))}
      </ul>
    );
  }




  return (
    <div style={{ width: '100%', margin: 5 }}>
      <UL
        items={posts}
        render_name={(data) => <>{data.user_id}</>}
        render_text={(data) => <>{data.text}</>}
      >
      </UL>
    </div>
  )
}

export default GetPosts