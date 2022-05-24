import { useState } from 'react'
import axios from 'axios';
import { postSlice } from '../chat/chatSlice';
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
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import './post.css'
import MessagePanel from '../chat/MessagePanel';
import MessageBar from '../chat/MessageBar';


const url = 'http://localhost:3000/posts';


interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

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
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };



  const [posts, setPosts] = useState([{
    id: 0,
    user_id: 'init',
    text: 'init',
}]);

const fetchPosts = async () => {
    try {
        const { data } = await axios.get(url)
        console.log(data);
        setPosts(data);
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
                  
                  
                  
                  
                  <Card sx={{ maxWidth: 900 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {render(item)}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={render(item)}
          subheader="September 14, 2016"
        />

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {render2(item)}
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
            <MessagePanel></MessagePanel>
            <MessageBar></MessageBar>
          </CardContent>
        </Collapse>
      </Card>
                  
                  
                  
                  
                  
                  
                  
                  {/* <Card sx={{ 
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
                  </Card> */}
              </li>
          ))}
      </ul>
  );
}


  return (
    <div style={{margin: 0}}>
    <UL
        //onLoad={getUser}
        items={posts}
        render={(data) => <>{data.user_id}</>}
        render2={(data) => <>{data.text}</>}
    >
    </UL>
    <button className='btn' onClick={fetchPosts}>
        Get Posts
    </button>
</div>
  )
}

export default GetPosts